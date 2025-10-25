'use client'
import React from 'react'
import { Typography } from 'antd'
import clsx from 'clsx'

const { Text, Title } = Typography

type GTextProps = {
    children: React.ReactNode
    variant?: 'title' | 'subtitle' | 'body' | 'caption'
    className?: string
    strong?: boolean
    underline?: boolean
    italic?: boolean
    type?: 'success' | 'warning' | 'danger' | 'secondary'
}

export const GText: React.FC<GTextProps> = ({
    children,
    variant = 'body',
    className,
    strong = false,
    underline = false,
    italic = false,
    type,
}) => {
    const baseStyle = clsx(
        {
            'text-4xl font-bold': variant === 'title',
            'text-xl font-semibold': variant === 'subtitle',
            'text-base': variant === 'body',
            'text-sm text-gray-500': variant === 'caption',
        },
        className
    )

    if (variant === 'title' || variant === 'subtitle') {
        return (
            <Title
                level={variant === 'title' ? 2 : 4}
                className={baseStyle}
                italic={italic}
            >
                {children}
            </Title>
        )
    }

    return (
        <Text
            className={baseStyle}
            strong={strong}
            underline={underline}
            italic={italic}
            type={type}
        >
            {children}
        </Text>
    )
}

export default GText
