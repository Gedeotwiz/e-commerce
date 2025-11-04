import GContainer from '@/componemts/Share/GContainer'
import GText from '@/componemts/Share/GText'
import { FC } from 'react'

interface Props {
    name: string
    title?: string
    options: string[]
    onChange?: (value: string) => void
}

export const Filter: FC<Props> = ({ name, title, options, onChange }) => {
    return (
        <GContainer className="flex flex-col gap-2 border-b-1 border-black">
            <GText className=" text-gray-700">{title}</GText>
            <select
                className="border border-gray-300 rounded-lg py-2 outline-none border-none"
                onChange={(e) => onChange?.(e.target.value)}
            >
                <option value="">{name}</option>
                {options.map((option, index) => (
                    <option
                        key={index}
                        value={option}
                        className="bg-[#E7F6F2] border-none outline-none"
                    >
                        {option}
                    </option>
                ))}
            </select>
        </GContainer>
    )
}
