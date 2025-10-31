import GContainer from "../Share/GContainer"
import GText from "../Share/GText"
import { ProductCard } from "./ProductCard"

export const AllProduct = () =>{
    const products = [
        {title:"TVS",price:"1050"},
        {title:"TVS",price:"1050"},
        {title:"TVS",price:"1050"},
        {title:"TVS",price:"1050"},
        {title:"TVS",price:"1050"},
        {title:"TVS",price:"1050"},
        {title:"TVS",price:"1050"},
        {title:"TVS",price:"1050"},
        {title:"TVS",price:"1050"},
        {title:"TVS",price:"1050"},
        {title:"TVS",price:"1050"},
    ]
    return (
        <GContainer className="w-full">
            <GContainer className="px-10">
                 <GText dimension="large" weight="bold">All Products</GText>
            </GContainer>
            <GContainer className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product,index)=>(
                  <ProductCard key={index}
                    title={product.title}
                    price={product.price}
                  />
                ))}
            </GContainer>
        </GContainer>
    )
}