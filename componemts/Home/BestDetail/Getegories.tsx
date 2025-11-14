
import GContainer from '@/componemts/Share/GContainer'
import { FaAngleRight } from 'react-icons/fa'
import GText from '@/componemts/Share/GText'
import GImage from '@/componemts/Share/GImage'
import { useGetCategoriesQuery } from '@/lib/rtk/category/categotyApi'

export const Gategories = () => {
    const { data, isLoading,} = useGetCategoriesQuery();
    console.log('data:', data);
    const categories = data?.payload || [];
     

    if (isLoading) return <GText>Loading...</GText>;
   

    return (
        <GContainer className="mt-3 space-y-2 px-3 pb-3">
            {categories.map((cat: any, index: number) => (
                <GContainer
                    key={cat._id}
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
                    <FaAngleRight size={14} className="text-gray-500" />
                </GContainer>
            ))}
        </GContainer>
    )
}

