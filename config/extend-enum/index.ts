import { COLOR_CONFIG } from '../styles/tailwind-theme'

export const ATTACHED_SIDES = ['left', 'right']
export type TATTACHED_SIDES = (typeof ATTACHED_SIDES)[number]

export const COLOR_CONFIG_PROPERTY_NAMES = Object.keys(
    COLOR_CONFIG
) as (keyof typeof COLOR_CONFIG)[]

export type TCOLORS = (typeof COLOR_CONFIG_PROPERTY_NAMES)[number]
