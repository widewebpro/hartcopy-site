'use client'
import { useProductsStore } from "@/store/useProductStore"
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import smoothScrollContainer from "@/helpers/scrollTo";
import Link from "next/link";
import { normalizePath } from "@/helpers/normalizePath";
import AnimatedCard from "./AnimatedCard";
export default function ProductsList() {
    const pathname = usePathname();
    const isBookmarksPage = normalizePath(pathname) === "/bookmarks";
    const favorites = useProductsStore(s => s.favorites);

    const searchTerm = useProductsStore((state) => state.searchTerm)
    const products = useProductsStore((state) => state.products)
    const resetHoverState = useProductsStore(state => state.resetHoverState)
    const isSearchOpen = useProductsStore((state) => state.isSearchOpen)
    const closeSearch = useProductsStore((state) => state.closeSearch)

    const { hoveredIndex, setHoveredIndex, setHoverWithDelay, clearHover, hoveredIndexGrid,setLastOpenedProduct, lastOpenedProduct } = useProductsStore();
    const refs = useRef([]);
    const containerRef = useRef(null)

    const getFilteredProducts = useProductsStore(
        (state) => state.getFilteredProducts
    )

    useEffect(() => {
        if (hoveredIndexGrid !== null) {
            const target = refs.current[hoveredIndexGrid]
            const container = containerRef.current

            if (target && container) {
                smoothScrollContainer({
                    container,
                    target,
                    duration: 1200,
                })
            }
        }
    }, [hoveredIndexGrid])

    useEffect(() => {
        if (lastOpenedProduct !== null && window.innerWidth > 768) {
            const target = refs.current[lastOpenedProduct]
            const container = containerRef.current

            if (target && container) {
                smoothScrollContainer({
                    container,
                    target,
                    duration: 1200,
                })
            }
        }
    }, [lastOpenedProduct])

    const baseProducts = isBookmarksPage
        ? products.filter(p => favorites.includes(p.id))
        : products;
    const filteredProducts = baseProducts.filter(p => {
        const query = String(searchTerm).toLowerCase()

        return [
            p.name,
            p.brand,
            p.description,
            p.dateUpload,
        ]
            .filter(Boolean)
            .some(field =>
                field.toString().toLowerCase().includes(query)
            )
    })

     useEffect(() => {
        resetHoverState()
    }, [pathname])
    useEffect(() => {
        if (!isSearchOpen) return
    
        const handleClickOutside = (e) => {
            console.log(e)
          if (
            containerRef.current &&
            !e.target.closest('.sidebar') && !e.target.closest('.bottom-pannel') && !e.target.closest('.product__product-list') 
          ) {
            closeSearch()
          }
        }
    
        document.addEventListener("pointerdown", handleClickOutside)
        return () => document.removeEventListener("pointerdown", handleClickOutside)
      }, [isSearchOpen, closeSearch])
    return (
        <ul ref={containerRef} className="flex-1 relative overflow-y-scroll mb-4 mt-32 pb-25">            
            {filteredProducts.length > 0 ? (
                filteredProducts.map((p, i) => {
                    const isDimmed = hoveredIndex !== null && hoveredIndex !== i;

                    return (
                        <li
                            ref={el => (refs.current[i] = el)}
                            key={i}
                            className={`text-[0.5rem] text-black mb-9 last:mb-0 transition-opacity duration-500 ${isDimmed ? "md:opacity-25" : "md:opacity-100"
                                }`}
                            onMouseEnter={() => { setHoveredIndex(i), setHoverWithDelay("list", i) }}
                            onMouseLeave={() => { setHoveredIndex(null), clearHover("list") }}
                        >
                            <Link href={`/products/${p.slug}`} onClick={() => {setLastOpenedProduct(i), closeSearch() }}>
                                <AnimatedCard className="flex">
                                    <span className="w-29">{i + 1}</span>
                                    <span>{p.name}</span>
                                </AnimatedCard>
                            </Link>

                        </li>
                    );
                })
            ) : (
                <li className="text-gray-500">No products found</li>
            )}
        </ul>

    )
}