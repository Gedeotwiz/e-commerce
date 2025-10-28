export const BUTTON_TYPES = [
    'primary',
    'default',
    'dashed',
    'link',
    'text',
] as const
export type TBUTTON_TYPES = (typeof BUTTON_TYPES)[number]

export const BUTTON_BACKGROUNDS = [
    'blue',
    'danger',
    'white',
    'gray',
    'yellow',
] as const
export type TBUTTON_BACKGROUNDS = (typeof BUTTON_BACKGROUNDS)[number]
export const BUTTON_TRANSFORMS = ['uppercase', 'lowercase', 'none'] as const
export type TBUTTON_TRANSFORMS = (typeof BUTTON_TRANSFORMS)[number]
export const CLIENT_LAYOUT_BACKGROUNDS = [
    'blue',
    'yellow',
    'white',
    'gray',
    'purple',
] as const
export type TCLIENT_LAYOUT_BACKGROUNDS =
    (typeof CLIENT_LAYOUT_BACKGROUNDS)[number]
