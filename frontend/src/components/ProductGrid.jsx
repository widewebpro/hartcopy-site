'use client'
import { useProductsStore } from "@/store/useProductStore"
import { useGridStore } from "@/store/useGridStore"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard"
import { usePathname } from "next/navigation";

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
    const filteredProducts = baseProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const { hoveredIndexList } = useProductsStore();

    const refs = useRef([]);
useEffect(() => {
        setThisIsMobile(window.innerWidth <= 769)
    }, [])
    useEffect(() => {
        if (hoveredIndexList !== null) {
            refs.current[hoveredIndexList]?.scrollIntoView({
                block: "start",
                behavior: "smooth",
            });
        }
    }, [hoveredIndexList]);
    return (
        <div className={`grid ${thisIsMobile ? `grid-cols-${mobCols}` : `grid-cols-${cols}`} gap-6 product-grid md:flex-1 md:overflow-y-scroll py-76 md:py-0`}>
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