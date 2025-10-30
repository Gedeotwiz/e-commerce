import GContainer from '@/componemts/Share/GContainer'
import GText from '@/componemts/Share/GText'
import { MdLocationPin } from 'react-icons/md'
import { SlEnvolopeLetter } from 'react-icons/sl'
import { FaPhoneAlt } from 'react-icons/fa'
import { BsStopwatch } from 'react-icons/bs'
import { FaRegCircleDot } from 'react-icons/fa6'

/**
 * @since October 2025
 * @author Gedeon Twizermana <gedeontwizerimana6@gmail.com>
 * @see {@link :https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

export const FooterLinks = () => {
    const items = [
        {
            title: 'Contact us',
            datas: [
                { icos: <MdLocationPin />, text: 'Kigali, Rwanda' },
                {
                    icos: <FaPhoneAlt />,
                    text: '(+250) 783 801 966 - (+250) 733 117 441',
                },
                {
                    icos: <SlEnvolopeLetter />,
                    text: 'gedeontwizerimana6@gmail.com',
                },
                { icos: <BsStopwatch />, text: 'Open time: 8:00AM - 6:00PM' },
            ],
        },
        {
            title: 'Our Shops',
            datas: [
                { icos: <FaRegCircleDot size={10} />, text: 'Product Support' },
                { icos: <FaRegCircleDot size={10} />, text: 'PCs Setup' },
                { icos: <FaRegCircleDot size={10} />, text: 'Services' },
                { icos: <FaRegCircleDot size={10} />, text: 'Conditions' },
                { icos: <FaRegCircleDot size={10} />, text: 'Privacy Policy' },
                { icos: <FaRegCircleDot size={10} />, text: 'Return Exchange' },
            ],
        },
        {
            title: 'All categories',
            datas: [
                {
                    icos: <FaRegCircleDot size={10} />,
                    text: 'Computer & Office',
                },
                { icos: <FaRegCircleDot size={10} />, text: 'Health & Beauty' },
                { icos: <FaRegCircleDot size={10} />, text: 'Phones & Access' },
                {
                    icos: <FaRegCircleDot size={10} />,
                    text: 'Sports & Outdoors',
                },
                {
                    icos: <FaRegCircleDot size={10} />,
                    text: 'Home & Furniture',
                },
                { icos: <FaRegCircleDot size={10} />, text: 'Fashion & Arts' },
            ],
        },
        {
            title: 'Our Shops',
            datas: [
                { icos: <FaRegCircleDot size={10} />, text: 'Product Support' },
                { icos: <FaRegCircleDot size={10} />, text: 'PCs Setup' },
                { icos: <FaRegCircleDot size={10} />, text: 'Services' },
                { icos: <FaRegCircleDot size={10} />, text: 'Conditions' },
                { icos: <FaRegCircleDot size={10} />, text: 'Privacy Policy' },
                { icos: <FaRegCircleDot size={10} />, text: 'Return Exchange' },
            ],
        },
    ]

    return (
        <GContainer className="bg-[#E7F6F2] flex flex-col gap-5 justify-start md:flex-row md:justify-around px-5 md:px-30 py-10 md:py-20">
            {items.map((item, index) => {
                const isHiddenOnMobile = !(index === 0 || index === 2)
                const visibilityClass = isHiddenOnMobile
                    ? 'hidden md:flex'
                    : 'flex'

                return (
                    <GContainer
                        key={index}
                        className={`${visibilityClass} flex-col`}
                    >
                        <GText
                            translate="yes"
                            dimension="large"
                            weight="bold"
                            className="border-b-2 border-black"
                        >
                            {item.title}
                        </GText>
                        <GContainer className="py-3 flex flex-col gap-2">
                            {item.datas.map((data, id) => (
                                <GContainer
                                    key={id}
                                    className="flex justify-start items-center gap-1.5 md:gap-3"
                                >
                                    {data.icos}
                                    <GText>{data.text}</GText>
                                </GContainer>
                            ))}
                        </GContainer>
                    </GContainer>
                )
            })}
        </GContainer>
    )
}
