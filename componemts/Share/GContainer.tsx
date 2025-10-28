import {
    CSSProperties,
    DetailedHTMLProps,
    FC,
    HTMLAttributes,
    JSX,
    ReactNode,
} from 'react'

interface IProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode
    className?: string
    style?: CSSProperties
}
/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

const GContainer: FC<IProps> = ({
    children,
    className,
    style,
    ...rest
}): JSX.Element => {
    return (
        <div className={className} style={style} {...rest}>
            {children}
        </div>
    )
}

export default GContainer
