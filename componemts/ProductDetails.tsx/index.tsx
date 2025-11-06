'use client'

import { useAppSelector } from '@/lib/rtk/hook'
import { useRouter, useParams } from 'next/navigation'
import GContainer from '@/componemts/Share/GContainer'
import GImage from '@/componemts/Share/GImage'
import GText from '@/componemts/Share/GText'
import GButton from '@/componemts/Share/GButton'
import { CiHeart } from 'react-icons/ci'
import { FaCartPlus } from 'react-icons/fa'
import { useEffect } from 'react'

export default function ProductDetail() {
    const router = useRouter()
    const params = useParams()

    const item = useAppSelector((state: any) => state.selected.selectedItem)

    useEffect(() => {
        if (!item) {
            router.push('/')
        }
    }, [item, router])
    if (!item) {
        return (
            <GContainer className="flex items-center justify-center min-h-screen">
                <GText>Loading...</GText>
            </GContainer>
        )
    }
    return (
        <GContainer className=" bg-[#F8FAFC] flex flex-col md:flex-row items-center p-8 space-y-4">
            <GContainer>
                <GContainer className="flex ">
                    <GImage
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={500}
                        className="rounded-2xl object-cover"
                    />
                    <GContainer className="w-full px-60 pt-6">
                        <GText
                            weight="solid"
                            dimension="semi-large"
                            className="text-3xl font-bold text-gray-900"
                        >
                            {item.title}
                        </GText>
                        <GText
                            weight="semibold"
                            dimension="large"
                            color="red"
                            className="text-xl text-[#940d4c] font-semibold"
                        >
                            {item.price}
                        </GText>
                        <GContainer className="">
                            <GContainer className="flex gap-6">
                                <GText>Category</GText>
                                <GText>Fashion</GText>
                            </GContainer>
                            <GContainer className="flex gap-6">
                                <GText>Bonus </GText>
                                <GText>3%</GText>
                            </GContainer>
                            <GContainer className="flex gap-6">
                                <GText>status</GText>
                                <GText>available</GText>
                            </GContainer>
                        </GContainer>
                        <GContainer className="flex space-x-6">
                            <GContainer className="flex border rounded-md items-center space-x-2 px-1.5">
                                <GText>-</GText>
                                <GText>1</GText>
                                <GText>+</GText>
                            </GContainer>
                            <GContainer className="flex items-center space-x-2">
                                <CiHeart />
                                <GText>Add to wishlist</GText>
                            </GContainer>
                        </GContainer>
                        <GButton
                            className="px-4 py-2 w-full sm:w-auto text-white bg-[#0D9488] hover:bg-[#0B7B72] mt-4 transition rounded-full flex items-center justify-center"
                            icon={<FaCartPlus />}
                        >
                            add to cut
                        </GButton>
                    </GContainer>
                </GContainer>
            </GContainer>
        </GContainer>
    )
}
