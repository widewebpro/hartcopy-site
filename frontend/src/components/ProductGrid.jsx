'use client'
import { useProductsStore } from "@/store/useProductStore"
import { useGridStore } from "@/store/useGridStore"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard"
import { usePathname } from "next/navigation";
import smoothScrollContainer from "@/helpers/scrollTo";
export default function ProductGrid() {
    const pathname = usePathname();
    const isBookmarksPage = pathname === "/bookmarks";
    const favorites = useProductsStore(s => s.favorites);
    const searchTerm = useProductsStore((state) => state.searchTerm)
    const products = useProductsStore((state) => state.products)
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
    const { hoveredIndexList } = useProductsStore();
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
    return (
        <div ref={containerRef} className={`grid ${thisIsMobile ? `grid-cols-${mobCols}` : `grid-cols-${cols}`} gap-6 md:gap-20 product-grid md:flex-1 md:overflow-y-scroll pb-76 pt-48 md:py-0 pl-11`}>
            {filteredProducts.map((p, i) => (
                <div key={i} ref={el => (refs.current[i] = el)}>
                    <Link href={`/products/${p.slug}`}>

                        <ProductCard key={i} product={p} index={i} />
                    </Link>

                </div>
            ))}
        </div>
    );
}