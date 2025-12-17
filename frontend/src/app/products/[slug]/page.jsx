'use client'

import { useProductsStore } from "@/store/useProductStore";
import React from "react";
import Sidebar from "@/components/Sidebar";
import MainSection from "@/components/MainSection";
import Header from "@/components/Header";
export default function ProductPage({ params }) {
    const { slug } = React.use(params)

    const products = useProductsStore((state) => state.products)
    const product = products.find((p) => p.slug === slug)
    const setSelectedProduct = useProductsStore((state) => state.setSelectedProduct);
    React.useEffect(() => {
        if (product) setSelectedProduct(product);
    }, [product]);
    if (!product) return <div>Not Found</div>;

    return (
        <div className="container md:flex">
             <div className="md:hidden w-[calc(100%-24px)] fixed top-12 left-12 right-12 z-50">
                <Header />
            </div>
            <Sidebar page={'product'} />
            <MainSection page={'product'} />
        </div>
    );
}