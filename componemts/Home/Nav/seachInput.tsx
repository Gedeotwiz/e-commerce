'use client'

import Input from 'antd/es/input/Input'
import { IoIosSearch } from 'react-icons/io'

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

export const SeaRchInput = () => {
    return <Input suffix={<IoIosSearch />} placeholder="Search..." />
}
