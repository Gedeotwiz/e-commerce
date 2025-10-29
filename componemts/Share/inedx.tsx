import React, { FC, ReactNode, useMemo } from 'react'
import { ConfigProvider, theme, ThemeConfig } from 'antd'
import { ANTD_THEME } from '@/config/styles/antd-theme'

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

export type TComponentTypesFromAntD = ThemeConfig['components'] extends object
    ? Partial<ThemeConfig['components']['Button']>
    : Record<string, unknown>

interface IProps {
    children: ReactNode
    buttonTheme?: TComponentTypesFromAntD
}

const { defaultAlgorithm, darkAlgorithm } = theme

const GComponent: FC<IProps> = ({ children, buttonTheme }) => {
    const algorithm = useMemo(() => {
        if (typeof window !== 'undefined') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? darkAlgorithm
                : defaultAlgorithm
        }
        return defaultAlgorithm
    }, [])

    const mergedTheme: ThemeConfig = {
        ...ANTD_THEME,
        algorithm,
        components: {
            ...ANTD_THEME.components,
            Button: {
                ...ANTD_THEME.components?.Button,
                ...buttonTheme,
            },
        },
    }

    return <ConfigProvider theme={mergedTheme}>{children}</ConfigProvider>
}

export default GComponent