'use client'
import dynamic from "next/dynamic"
import SearchInput from "./SearchInput"
import ProductDescription from "./ProductDescription"
import StoriesList from "./StoriesList"
import { useProductsStore } from "@/store/useProductStore"
const ProductsList = dynamic(() => import("./ProductsList"), {
  ssr: false,
})
export default function SideList({page}) {
    const isSearchOpen = useProductsStore((s) => s.isSearchOpen)


  const shouldShowProductsList =
    !page || (page === 'product' && isSearchOpen)
    return (
        <>
            {shouldShowProductsList && (
            <ProductsList />
        )}

        {page === 'product' && !isSearchOpen && <ProductDescription />}

        {page === 'stories' && <StoriesList />}

        <SearchInput page={page} />
        </>
    )
}