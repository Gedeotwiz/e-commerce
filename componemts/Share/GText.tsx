'use client '
import { COLOR_CONFIG } from '@/config/styles/tailwind-theme'
import { ITypographyProps } from '@/lib/types/components/typograpth'
import { FC, JSX } from 'react'

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

const GText: FC<ITypographyProps> = ({
    dimension,
    children,
    className,
    style,
    color,
    weight,
    center,
    ...rest
}): JSX.Element => {
    const level = (function () {
        switch (dimension) {
            case 'giant':
                return 'text-[40px] lg:text-[56px] leading-none lg:leading-tight'
            case 'extra-large':
                return ' text-[24px] md:text-[40px] leading-tight'
            case 'large':
                return 'text-[18px] md:text-[24px] leading-[30px]'
            case 'semi-large':
                return 'text-[18px] leading-[22.5px]'
            case 'heading':
                return 'text-[16px] '
            case 'medium':
                return 'text-[16px]'
            case 'caption':
                return 'text-[12px]'
            case 'tiny':
                return 'text-[10px]'
            default:
                return 'text-[14px]'
        }
    })()

    const fontWeight = (function () {
        switch (weight) {
            case 'normal':
                return 'font-[300]'
            case 'solid':
                return 'font-[500]'
            case 'medium':
                return 'font-[600]'
            case 'semibold':
                return 'font-[700]'
            case 'bold':
                return 'font-[900]'
            default:
                return 'font-[400]'
        }
    })()

    return (
        <span
            className={`${level} ${fontWeight} ${className} ${center ? 'text-center' : ''} block`}
            style={{
                color: color ? COLOR_CONFIG[color] : COLOR_CONFIG['black'],
                ...style,
            }}
            {...rest}
        >
            {children}
        </span>
    )
}

export default GText
