
'use client'

import React, { FC, ReactNode, useState, useEffect } from 'react'
import { ConfigProvider, theme, ThemeConfig } from 'antd'
import { ANTD_THEME } from '@/config/styles/antd-theme'

/**
 * Safe type for custom Ant Design component theming (e.g., Button)
 */
export type TComponentTypesFromAntD = ThemeConfig['components'] extends object
    ? Partial<ThemeConfig['components']['Button']>
    : Record<string, unknown>

interface IProps {
    children: ReactNode
    buttonTheme?: TComponentTypesFromAntD
}

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 * @description A wrapper around Ant Design ConfigProvider
 * that applies theme overrides for globally extended components.
 */
const { defaultAlgorithm, darkAlgorithm } = theme

const GComponent: FC<IProps> = ({ children, buttonTheme }) => {
    // Default to light theme for SSR
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        // Only run on client side
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setIsDarkMode(isDark)

        // Optional: Listen for theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches)
        }

        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    const mergedTheme: ThemeConfig = {
        ...(ANTD_THEME || {}),
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        components: {
            ...(ANTD_THEME?.components || {}),
            Button: {
                ...(ANTD_THEME?.components?.Button || {}),
                ...buttonTheme,
            },
        },
    }

    return <ConfigProvider theme={mergedTheme}>{children}</ConfigProvider>
}

export default GComponent