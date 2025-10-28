import { COLOR_CONFIG } from './tailwind-theme'

export const ANTD_THEME = {
    components: {
        Button: {
            defaultHoverBorderColor: COLOR_CONFIG.primary,
            defaultHoverColor: COLOR_CONFIG.primary,
            colorPrimaryActive: COLOR_CONFIG.primary,
            colorPrimary: COLOR_CONFIG.primary,
            colorPrimaryBgHover: COLOR_CONFIG.primary,
            colorPrimaryBg: COLOR_CONFIG.primary,
            colorPrimaryText: COLOR_CONFIG.primary,
            colorPrimaryHover: COLOR_CONFIG.primary,
        },
        Input: {
            colorText: COLOR_CONFIG.black,
        },
    },
}
