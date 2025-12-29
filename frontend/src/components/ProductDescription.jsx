'use client'

import { useProductsStore } from "@/store/useProductStore"
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/helpers/formatDate";
import { useEffect } from "react";
export default function ProductDescription() {
    const product = useProductsStore((state) => state.selectedProduct);
    const favorites = useProductsStore(s => s.favorites);
    const resetHoverState = useProductsStore(state => state.resetHoverState)

    const toggleFavorite = useProductsStore(s => s.toggleFavorite);
    const isFavorite = product
        ? favorites.includes(product.id)
        : false;

    useEffect(() => {
            resetHoverState()
    }, [])
    return (
        <div className="md:flex flex-1 flex-col min-h-0 p-20 md:py-0 md:pl-0 md:pr-8 bg-light-white rounded-[12px] md:rounded-[8px] sticky top-61 md:static" >

            {product &&

                <>
                    <button onClick={() => toggleFavorite(product.id)} className="md:mt-34 absolute top-12 right-14 md:static cursor-pointer w-32 h-32 flex items-center justify-center md:w-10 md:h-13">
                        {isFavorite ?
                            <svg width="13" height="18" className="w-15 h-20 md:w-10 md:h-13" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 0.750002C0 0.335791 0.323353 0 0.722222 0H12.2778C12.6766 0 13 0.335791 13 0.750002V17.25C13 17.5227 12.8576 17.7738 12.6279 17.906C12.3982 18.0381 12.1176 18.0305 11.895 17.886L6.5 14.3844L1.105 17.886C0.882367 18.0305 0.601741 18.0381 0.372118 17.906C0.14248 17.7738 0 17.5227 0 17.25V0.750002ZM1.44444 1.5V15.8969L5.73444 13.1124C6.20283 12.8085 6.79717 12.8085 7.26556 13.1124L11.5556 15.8969V1.5H1.44444Z" fill="black" />
                                <path d="M0.677124 17.3907V1.21875L12.1875 0.515625V17.3907L6.77087 13.875L0.677124 17.3907Z" fill="black" />
                            </svg>
                            :
                            <svg width="10" height="13" className="w-15 h-20 md:w-10 md:h-13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 0.541668C0 0.242516 0.248733 0 0.555556 0H9.44444C9.75122 0 10 0.242516 10 0.541668V12.4584C10 12.6553 9.89044 12.8367 9.71378 12.9321C9.53711 13.0275 9.32122 13.022 9.15 12.9177L5 10.3888L0.85 12.9177C0.678744 13.022 0.462878 13.0275 0.286244 12.9321C0.1096 12.8367 0 12.6553 0 12.4584V0.541668ZM1.11111 1.08334V11.4811L4.41111 9.47009C4.77141 9.2506 5.22859 9.2506 5.58889 9.47009L8.88889 11.4811V1.08334H1.11111Z" fill="black" />
                            </svg>
                        }

                    </button>
                    <p className="md:mt-16 text-[0.75rem] leading-[170%] md:text-[0.875rem] md:leading-[1.25rem]">
                        {formatDate(product.dateUpload)}
                    </p>
                    <p className="mt-4 md:mt-12 text-[1.375rem] md:text-[0.875rem] leading-[1.375rem] md:leading-[1.25rem]">
                        {product.name}
                    </p>
                    <div className="flex-1 mt-30 md:mt-16  overflow-y-scroll min-h-0">
                        <p className="text-[0.625rem] md:text-[0.5rem] leading-[150%] ">
                            {product.description}
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi repellendus provident cupiditate odio. Minus ullam aperiam perspiciatis nisi molestias sequi consectetur assumenda! Odit ipsam deleniti minima. Beatae, debitis aut.

                        </p>
                    </div>
                    <div className="mt-20 md:mt-24">
                        <p className="text-[0.5rem] mb-20 text-primary">
                            SIMILAR PRODUCTS
                        </p>
                        <div className="flex justify-between flex-wrap">
                            <Link className="w-[calc(50%-0.375rem)] md:w-[unset]  transition-opacity duration-300" href={`/products/dr-martens-1460/`}>
                                <Image width={144} className="w-full md:w-110 aspect-square" alt={product.name} height={144} src={product.image} />
                                
                            </Link>
                            <Link className="w-[calc(50%-0.375rem)] md:w-[unset]  transition-opacity duration-300" href={`/products/dr-martens-1460/`}>
                                <Image width={144} className="w-full md:w-110 aspect-square" alt={product.name} height={144} src={product.image} />

                            </Link>
                            <Link className="w-[calc(50%-0.375rem)] md:w-[unset]  transition-opacity duration-300" href={`/products/dr-martens-1460/`}>
                                <Image width={144} className="w-full md:w-110 aspect-square" alt={product.name} height={144} src={product.image} />

                            </Link>
                        </div>
                    </div>

                </>
            }

        </div>
    )
}


