'use client'
import React, { FC, ReactNode } from 'react'
import { ConfigProvider, theme, ThemeConfig } from 'antd'
import { ANTD_THEME } from '@/config/styles/antd-theme'

export type TComponentTypesFromAntD = ThemeConfig['components'] extends object
    ? Partial<ThemeConfig['components']['Button']>
    : Record<string, unknown>

interface IProps {
    children: ReactNode
    buttonTheme?: TComponentTypesFromAntD
}

const GComponent: FC<IProps> = ({ children, buttonTheme }) => {
    const mergedTheme: ThemeConfig = {
        ...ANTD_THEME,
        algorithm: theme.defaultAlgorithm,
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
