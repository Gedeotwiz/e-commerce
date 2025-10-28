import { COLOR_CONFIG } from '@/config/styles/tailwind-theme'
import { IGButtonProps } from '@/lib/types/share'
import { Button } from 'antd'
import { FC, JSX } from 'react'
import GComponent from './inedx'

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

const GButton: FC<IGButtonProps> = ({
    children,
    style,
    icon,
    iconPosition,
    textTransform = 'none',
    bg,
    full,
    size,
    sharp,
    type = 'primary',
    attachedSide,
    bordred,
    ...rest
}): JSX.Element => {
    const bgColor = (function () {
        switch (bg) {
            case 'blue':
                return COLOR_CONFIG['ESeven']
            case 'white':
                return COLOR_CONFIG['white']
            case 'yellow':
                return COLOR_CONFIG['primary']
            default:
                return ''
        }
    })()

    const color = (function () {
        switch (bg) {
            case 'blue':
                return COLOR_CONFIG['white']
            case 'gray':
                return COLOR_CONFIG['AFive']
            default:
                return ''
        }
    })()

    return (
        <GComponent buttonTheme={{ borderRadius: sharp ? 0 : 6 }}>
            <Button
                className={`${full ? 'w-full' : ''} flex-shrink-0`}
                style={{
                    ...style,
                    boxShadow: 'none',
                    textTransform: textTransform,
                    background: bgColor,
                    color: bordred ? 'white' : color,
                    padding: size === 'small' ? '0px 26px' : '',
                    borderTopLeftRadius:
                        attachedSide === 'left' ? '0px' : undefined,
                    borderBottomLeftRadius:
                        attachedSide === 'left' ? '0px' : undefined,
                    borderTopRightRadius:
                        attachedSide === 'right' ? '0px' : undefined,
                    borderBottomRightRadius:
                        attachedSide === 'right' ? '0px' : undefined,
                    border: bordred ? '1px solid white' : undefined,
                }}
                size={size}
                icon={icon}
                iconPosition={iconPosition}
                type={type}
                {...rest}
            >
                {children}
            </Button>
        </GComponent>
    )
}

export default GButton
