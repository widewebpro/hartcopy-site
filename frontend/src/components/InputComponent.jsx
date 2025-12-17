'use client'

import { useProductsStore } from "@/store/useProductStore"
import { useStoriesStore } from "@/store/useStoriesStore"
export default function InputComponent({page}) {
    const searchProductTerm = useProductsStore((state) => state.searchTerm)
    const setSearchProductTerm = useProductsStore((state) => state.setSearchTerm)
    const searchStoriesTerm = useStoriesStore((state) => state.searchTerm)
    const setSearchStoriesTerm = useStoriesStore((state) => state.setSearchTerm)

    return(
            <input
                type="text"
                placeholder="Search Brand, Style, Colour or Year"
                value={page === 'stories' ? searchStoriesTerm : searchProductTerm}
                onChange={(e) => page === 'stories' ? setSearchStoriesTerm(e.target.value) : setSearchProductTerm(e.target.value)}
                className="p-10 relative text-[8px] leading-[8px] border rounded w-full placeholder:text-dark-grey bg-light-grey border-0"
            />
    )
}


