import { TCOLORS } from '@/config/extend-enum'
import {
    ITEXT_WEIGHT,
    TINPUT_DIMENSIONS,
} from '@/config/extend-enum/typograpth-types'
import { TitleProps } from 'antd/es/typography/Title'

export interface ITypographyProps extends TitleProps {
    dimension?: TINPUT_DIMENSIONS
    color?: TCOLORS
    weight?: ITEXT_WEIGHT
    center?: boolean
}
