import GContainer from "@/componemts/Share/GContainer"
import { Filter } from "./Filter"

export const FilterCard = () =>{
    return (
        <GContainer className="mx-5">
            <GContainer className="py-16">
                <Filter
               name="SORT BY"
               options={["Clothes", "Electronics", "Shoes", "Furniture"]}
               onChange={(value) => console.log("Selected:", value)}
              />
            </GContainer>
           <GContainer className="flex flex-col gap-5">
             <Filter
               title="Filter By"
               name="CATEGORY"
               options={["Clothes", "Electronics", "Shoes", "Furniture"]}
               onChange={(value) => console.log("Selected:", value)}
           />
             <Filter
               name="BRAND"
               options={["Clothes", "Electronics", "Shoes", "Furniture"]}
               onChange={(value) => console.log("Selected:", value)}
           />
             <Filter
               name="MIN:"
               options={["Clothes", "Electronics", "Shoes", "Furniture"]}
               onChange={(value) => console.log("Selected:", value)}
           />
             <Filter
               name="MAX:"
               options={["Clothes", "Electronics", "Shoes", "Furniture"]}
               onChange={(value) => console.log("Selected:", value)}
           />
             <Filter
               name="SELLER"
               options={["Clothes", "Electronics", "Shoes", "Furniture"]}
               onChange={(value) => console.log("Selected:", value)}
           />
           </GContainer>
        </GContainer>
    )
}