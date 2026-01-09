'use client'

import { useProductsStore } from "@/store/useProductStore"
import { useStoriesStore } from "@/store/useStoriesStore"
export default function InputComponent({page}) {
    const searchProductTerm = useProductsStore((state) => state.searchTerm)
    const setSearchProductTerm = useProductsStore((state) => state.setSearchTerm)
    const searchStoriesTerm = useStoriesStore((state) => state.searchTerm)
    const setSearchStoriesTerm = useStoriesStore((state) => state.setSearchTerm)
    const openSearch = useProductsStore((s) => s.openSearch)

    return(
            <input
                type="text"
                placeholder="Search Brand, Style, Colour or Year"
                value={page === 'stories' ? searchStoriesTerm : searchProductTerm}
                onChange={(e) => page === 'stories' ? setSearchStoriesTerm(e.target.value) : setSearchProductTerm(e.target.value)}
                className="px-10 pt-10 pb-11 relative text-[0.5rem] leading-[0.625rem] border rounded-[0.438rem] w-full placeholder:text-dark-grey bg-light-grey border-0"
            />
    )
}


