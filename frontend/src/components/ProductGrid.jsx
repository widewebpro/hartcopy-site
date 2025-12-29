'use client'
import { useProductsStore } from "@/store/useProductStore"
import { useGridStore } from "@/store/useGridStore"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard"
import { usePathname } from "next/navigation";
import smoothScrollContainer from "@/helpers/scrollTo";
import { normalizePath } from "@/helpers/normalizePath";
export default function ProductGrid() {
    const pathname = usePathname();
    const isBookmarksPage = normalizePath(pathname) === "/bookmarks";
    const favorites = useProductsStore(s => s.favorites);
    const searchTerm = useProductsStore((state) => state.searchTerm)
    const products = useProductsStore((state) => state.products)
    const resetHoverState = useProductsStore(state => state.resetHoverState)
    const { setHoveredIndex, setHoverWithDelay, clearHover, hoveredIndexList, lastOpenedProduct } = useProductsStore();

    const { setLastOpenedProduct } = useProductsStore()

    const cols = useGridStore((state) => state.cols)
    const mobCols = useGridStore((state) => state.mobCols)
    const [thisIsMobile, setThisIsMobile] = useState(false)

    const getFilteredProducts = useProductsStore(
        (state) => state.getFilteredProducts
    )
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
    const containerRef = useRef(null)

    const refs = useRef([]);
    useEffect(() => {
        setThisIsMobile(window.innerWidth <= 769)
    }, [])
     useEffect(() => {
        if (hoveredIndexList !== null) {
            const target = refs.current[hoveredIndexList]
            const container = containerRef.current
            
            if (target && container) {
                smoothScrollContainer({
                    container,
                    target,
                    duration: 1200,
                })
            }
        }
    }, [hoveredIndexList])
     useEffect(() => {
        if (lastOpenedProduct !== null) {
            const target = refs.current[lastOpenedProduct]
            const container = containerRef.current
            setTimeout(()=>{
                if (target && container) {
                smoothScrollContainer({
                    container,
                    target,
                    duration: 1200,
                })
            }
            }, 500)
            
        }
    }, [lastOpenedProduct])
    useEffect(() => {
        resetHoverState()
    }, [pathname])
    return (
        <div ref={containerRef} className={`grid ${thisIsMobile ? `grid-cols-${mobCols}` : `grid-cols-${cols}`} gap-6 md:gap-20 product-grid md:flex-1 md:overflow-y-scroll pb-49 pt-37 md:py-0 md:pl-11`}>
            {filteredProducts.map((p, i) => (
                <div key={i} ref={el => (refs.current[i] = el)}>
                    <Link href={`/products/${p.slug}`} onClick={() => setLastOpenedProduct(i)}
                    onMouseEnter={() => {setHoveredIndex(i); setHoverWithDelay("grid", i)}}
                        onMouseLeave={() => {setHoveredIndex(null); clearHover("grid")}}>

                        <ProductCard key={i} product={p} index={i} />
                    </Link>

                </div>
            ))}
        </div>
    );
}