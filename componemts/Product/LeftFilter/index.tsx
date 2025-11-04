'use client'

import GContainer from '@/componemts/Share/GContainer'
import { AllCategories } from './AllCategories'
import { FilterCard } from './FilterCard'

export const LeftFilter = () => {
    return (
        <GContainer className="w-[350px] hidden md:block">
            <AllCategories />
            <FilterCard />
        </GContainer>
    )
}
