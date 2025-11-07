'use client'

import React, { ChangeEvent } from "react"
import GContainer from "../GContainer"

interface Props {
  name: string
  value: string
  type: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void 
  placeholder: string
}

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

export const Input = ({ name, value, type, onChange, placeholder }: Props) => {
  return (
    <GContainer>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-[#2E4F4F] outline-none py-2 text-[#2E4F4F] placeholder-[#708090] text-sm sm:text-base"
      />
    </GContainer>
  )
}
