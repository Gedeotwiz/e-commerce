import { ButtonProps } from 'antd'
import { TATTACHED_SIDES } from '@/config/extend-enum'
import {
    TBUTTON_BACKGROUNDS,
    TBUTTON_TRANSFORMS,
} from '@/config/extend-enum/button-type'

export interface IGButtonProps extends ButtonProps {
    iconSrc?: string
    bg?: TBUTTON_BACKGROUNDS
    textTransform?: TBUTTON_TRANSFORMS
    full?: boolean
    /**
     * Creates a button without any border radius
     */
    sharp?: boolean
    /**
     * Creates a button with border radius on one side.
     */
    attachedSide?: TATTACHED_SIDES
    /**
     * Creates a button with white borders and transparent background.
     */
    bordred?: boolean
}
