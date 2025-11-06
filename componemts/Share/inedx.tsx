'use client'
import React, { FC, ReactNode, useMemo, useEffect, useState } from 'react'
import { ConfigProvider, theme, ThemeConfig } from 'antd'
import { ANTD_THEME } from '@/config/styles/antd-theme'


const { defaultAlgorithm, darkAlgorithm } = theme

export type TComponentTypesFromAntD = ThemeConfig['components'] extends object
    ? Partial<ThemeConfig['components']['Button']>
    : Record<string, unknown>

interface IProps {
    children: ReactNode
    buttonTheme?: TComponentTypesFromAntD
}

const GComponent: FC<IProps> = ({ children, buttonTheme }) => {
    const [mounted, setMounted] = useState(false)
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        setMounted(true)
        const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        setIsDark(darkMode)

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches)
        
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    const algorithm = useMemo(() => {
        return isDark ? darkAlgorithm : defaultAlgorithm
    }, [isDark])

    const mergedTheme: ThemeConfig = useMemo(() => ({
        ...ANTD_THEME,
        algorithm,
        components: {
            ...ANTD_THEME.components,
            Button: {
                ...ANTD_THEME.components?.Button,
                ...buttonTheme,
            },
        },
    }), [algorithm, buttonTheme])

    if (!mounted) {
        const serverTheme: ThemeConfig = {
            ...ANTD_THEME,
            algorithm: defaultAlgorithm,
            components: {
                ...ANTD_THEME.components,
                Button: {
                    ...ANTD_THEME.components?.Button,
                    ...buttonTheme,
                },
            },
        }
        return <ConfigProvider theme={serverTheme}>{children}</ConfigProvider>
    }

    return <ConfigProvider theme={mergedTheme}>{children}</ConfigProvider>
}

export default GComponent