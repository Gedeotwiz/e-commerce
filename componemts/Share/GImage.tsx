import React from 'react'
import Image, { ImageProps } from 'next/image'

type GImageProps = {
    src: string
    alt?: string
    width?: number
    height?: number
    className?: string
} & ImageProps

export const GImage: React.FC<GImageProps> = ({
    src,
    alt = 'image',
    width,
    height,
    className,
    ...props
}) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            {...props}
        />
    )
}
