'use client'

import React, { useState, ChangeEvent } from 'react'
import GContainer from '../GContainer'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

interface Props {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    name: string
    placeholder: string
}

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

export const InputPassword = ({
    value,
    onChange,
    name,
    placeholder,
}: Props) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <GContainer className="relative w-full">
            <input
                name={name}
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-[#2E4F4F] outline-none py-2 text-[#2E4F4F] text-sm sm:text-base pr-10"
                value={value}
                onChange={onChange}
            />

            <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-2 cursor-pointer text-[#2E4F4F]"
            >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </span>
        </GContainer>
    )
}
