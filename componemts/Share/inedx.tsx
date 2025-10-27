import React, { FC, ReactNode } from "react"
import { ConfigProvider, theme, ThemeConfig } from "antd"
import { ANTD_THEME } from "@/config/styles/antd-theme"

/**
 * Safe type for custom Ant Design component theming (e.g., Button)
 */
export type TComponentTypesFromAntD = ThemeConfig["components"] extends object
  ? Partial<ThemeConfig["components"]["Button"]>
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
  const mergedTheme: ThemeConfig = {
    ...ANTD_THEME,
    algorithm: window.matchMedia("(prefers-color-scheme: dark)").matches
      ? darkAlgorithm
      : defaultAlgorithm,
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
