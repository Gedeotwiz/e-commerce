'use client'

import GContainer from '@/componemts/Share/GContainer'
import GText from '@/componemts/Share/GText'
import { IoIosHeartEmpty } from 'react-icons/io'
import { FaRegCircleUser } from 'react-icons/fa6'
import { LuShoppingCart } from 'react-icons/lu'
import { SeaRchInput } from './seachInput'
import { CiMenuFries } from 'react-icons/ci'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

export const Heading = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Shops', href: '/shops' },
        { label: 'Products', href: '/products' },
    ]

    const items = [
        { icon: <IoIosHeartEmpty />, label: 'Wishlist' },
        { icon: <LuShoppingCart />, label: 'Cart' },
        { icon: <FaRegCircleUser />, label: 'Account' },
    ]

    return (
        <header className="w-full bg-[#E7F6F2] relative">
            <GContainer className="p-4 md:px-20 flex flex-wrap justify-between items-center">
                <GText
                    className="text-2xl text-[#2C3E50] tracking-wide cursor-pointer"
                    weight="bold"
                    dimension="large"
                    onClick={() => router.push('/')}
                >
                    ALPHA
                </GText>

                <nav className="hidden md:flex gap-10 items-center">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <GText
                                key={link.label}
                                onClick={() => router.push(link.href)}
                                className={`cursor-pointer hover:text-[#4390A6] transition-colors ${
                                    isActive ? 'font-bold underline' : ''
                                }`}
                            >
                                {link.label}
                            </GText>
                        )
                    })}
                </nav>

                <GContainer className="flex items-center gap-4 sm:gap-6">
                    <div className="hidden sm:block w-40 md:w-56">
                        <SeaRchInput />
                    </div>

                    <div className="flex items-center gap-3 sm:gap-5">
                        {items.map((item, index) => (
                            <button
                                key={index}
                                className="flex flex-col items-center text-[#2C3E50] hover:text-[#4390A6] transition-colors"
                                aria-label={item.label}
                            >
                                <div className="text-xl">{item.icon}</div>
                                <GText className="hidden sm:block text-xs">
                                    {item.label}
                                </GText>
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="md:hidden p-1 text-[#2C3E50] hover:text-[#4390A6] transition-colors"
                        aria-label="Toggle menu"
                    >
                        <CiMenuFries size={30} />
                    </button>
                </GContainer>
            </GContainer>

            {menuOpen && (
                <nav className="md:hidden bg-[#E7F6F2] absolute w-full z-50 border-t border-[#ccc] flex flex-col items-center py-4 px-5 space-y-3 animate-fadeIn shadow-sm">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <GText
                                key={link.label}
                                onClick={() => {
                                    router.push(link.href)
                                    setMenuOpen(false)
                                }}
                                className={`cursor-pointer hover:text-[#4390A6] transition-colors p-2 ${
                                    isActive ? 'font-bold underline' : ''
                                }`}
                            >
                                {link.label}
                            </GText>
                        )
                    })}
                    <SeaRchInput />
                </nav>
            )}
        </header>
    )
}
