'use client'
import { useProductsStore } from "@/store/useProductStore";
import Sidebar from "@/components/Sidebar";
import MainSection from "@/components/MainSection";
import Header from "@/components/Header";
import { useEffect } from "react";
export default function ProductPageWrap({ product }) {

    const setSelectedProduct = useProductsStore((state) => state.setSelectedProduct);
    useEffect(() => {
        if (product) setSelectedProduct(product);
    }, [product]);
    if (!product) return <div>Not Found</div>;

    return (
        <>
             <div className="md:hidden w-[calc(100%-24px)] fixed top-12 left-12 right-12 z-50">
                <Header />
            </div>
            <Sidebar page={'product'} />
            <MainSection page={'product'} />
        </>
    );
}