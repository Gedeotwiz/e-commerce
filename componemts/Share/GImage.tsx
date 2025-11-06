'use client'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image, { ImageProps } from 'next/image'
import { FC, JSX } from 'react'
interface IProps extends Omit<ImageProps, 'alt' | 'src'> {
    alt?: string
    src?: string | StaticImport
    pointer?: boolean
}

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

const GImage: FC<IProps> = ({
    alt = '',
    width,
    height,
    src,
    className,
    pointer,
    ...rest
}): JSX.Element => {
    return (
        <Image
            alt={alt}
            width={width}
            height={height}
            src={src || ''}
            className={`${pointer ? 'cursor-pointer' : ''} ${className}`}
            {...rest}
        />
    )
}

export default GImage
