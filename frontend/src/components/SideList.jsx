'use client'
import dynamic from "next/dynamic"
import SearchInput from "./SearchInput"
import ProductDescription from "./ProductDescription"
import StoriesList from "./StoriesList"
const ProductsList = dynamic(() => import("./ProductsList"), {
  ssr: false,
})
export default function SideList({page}) {
    return (
        <>
            {!page && <ProductsList />}
            {page === 'product' && <ProductDescription />}
            {page === 'stories' && <StoriesList />}
            <SearchInput page={page} />
        </>
    )
}