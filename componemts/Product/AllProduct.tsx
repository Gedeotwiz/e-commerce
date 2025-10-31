'use client'
import GContainer from "../Share/GContainer"
import GText from "../Share/GText"
import { ProductCard } from "./ProductCard"
import { Pagination } from 'antd';
import { CgMenuMotion } from "react-icons/cg";

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
            <GContainer className=" flex gap-5 px-5 md:px-10">
                <GContainer className="bg-[#395B64] w-[60px] py-1 px-5 md:hidden">
                  <CgMenuMotion color="white" size={24}/>
                </GContainer>
                 <GText dimension="large" weight="bold">All Products</GText>
            </GContainer>
            <GContainer className="p-5 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product,index)=>(
                  <ProductCard key={index}
                    title={product.title}
                    price={product.price}
                  />
                ))}
            </GContainer>
            <GContainer className="flex justify-center items-center md:justify-end md:items-end py-5  md:px-30">
               <Pagination defaultCurrent={1} total={50} />
            </GContainer>
        </GContainer>
    )
}