

import GContainer from '@/componemts/Share/GContainer'
import { FaAngleRight, FaAngleDown } from 'react-icons/fa'
import GText from '@/componemts/Share/GText'
import GImage from '@/componemts/Share/GImage'
import { useGetCategoriesQuery, useGetSubcategoriesQuery } from '@/lib/rtk/api/api'
import { useState } from 'react'

export const Gategories = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const { data, isLoading } = useGetCategoriesQuery();
    console.log('data:', data);
    const categories = data?.payload || [];

    const { data: subData } = useGetSubcategoriesQuery(selectedCategory!, {
        skip: !selectedCategory
    })

    console.log('Selected Category ID:', selectedCategory);
    console.log('Subcategories Data:', subData);
    const subcategories = subData?.payload || [];

    const handleCategoryClick = (categoryId: string) => {
        setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
    };

    if (isLoading) return <GText>Loading...</GText>;

    return (
        <GContainer className="mt-3 space-y-2 px-3 pb-3">
            {categories.map((cat: any) => (
                <GContainer key={cat._id} className="w-full">
                    <GContainer
                        onClick={() => handleCategoryClick(cat._id)}
                        className="hidden w-full md:flex items-center justify-between cursor-pointer hover:bg-[#D9F3EC] transition-colors rounded-lg px-2 py-1"
                    >
                        <GContainer className="flex items-center space-x-3">
                            <GImage
                                width={15}
                                height={15}
                                src={cat.image ? (cat.image.startsWith('/') ? cat.image : `/${cat.image}`) : '/images/default.png'}
                            />
                            <GText className="text-[#1E1E1E] text-sm font-medium">
                                {cat.name}
                            </GText>
                        </GContainer>
                        {selectedCategory === cat._id ? (
                            <FaAngleDown size={14} className="text-gray-500" />
                        ) : (
                            <FaAngleRight size={14} className="text-gray-500" />
                        )}
                    </GContainer>
                    {selectedCategory === cat._id && subcategories.length > 0 && (
                        <GContainer className="ml-8 mt-1 space-y-1 rounded-lg p-2">
                            {subcategories.map((subcat: any) => (
                                <GContainer
                                    key={subcat._id}
                                    className="flex items-center space-x-2 cursor-pointer rounded px-2 py-1"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        console.log('Subcategory clicked:', subcat);
                                    }}
                                >
                                    <GText className="text-gray-600 text-base font-sans">
                                         {subcat.name}
                                    </GText>
                                </GContainer>
                            ))}
                        </GContainer>
                    )}
                </GContainer>
            ))}
        </GContainer>
    )
}