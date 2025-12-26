'use client'
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useProductsStore } from "@/store/useProductStore"
import Image from "next/image";

export default function BookmarksMobile() {
    const favorites = useProductsStore(s => s.favorites);
    const products = useProductsStore((state) => state.products)
    const baseProducts = products.filter(p => favorites.includes(p.id))
    const toggleFavorite = useProductsStore(s => s.toggleFavorite);
    const searchTerm = useProductsStore((state) => state.searchTerm)
    const filteredProducts = baseProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <ul className="md:flex-1 md:overflow-y-scroll mb-4 pt-52 md:pt-0 md:mt-32 pb-76">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((p, i) => {
                    return (
                        <li
                            key={i}
                            className={`text-[0.5rem] relative bg-light-white cursor-pointer text-black mb-8 md:mb-9 last:mb-0 md:last:mb-0 rounded-[0.5rem] md:rounded-0 overflow-hidden`}
                        >
                        <Link href={`/products/${p.slug}`} className="flex items-center pl-16 pr-24">
                            <div className="w-84 h-84 mr-24 flex-shrink-0">
                                <Image className="w-full object-contain" width={84} height={84} alt={p.name} src={p.image} />
                                
                            </div>
                            <div className="pr-35">
                                    <p className="text-[0.938rem]">
                                        {p.name}
                                    </p>
                            </div>
                        </Link>
                         <button onClick={() => toggleFavorite(p.id)} className="absolute right-24 top-[50%] transform translate-y-[-50%]">
                            <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 0.750002C0 0.335791 0.323353 0 0.722222 0H12.2778C12.6766 0 13 0.335791 13 0.750002V17.25C13 17.5227 12.8576 17.7738 12.6279 17.906C12.3982 18.0381 12.1176 18.0305 11.895 17.886L6.5 14.3844L1.105 17.886C0.882367 18.0305 0.601741 18.0381 0.372118 17.906C0.14248 17.7738 0 17.5227 0 17.25V0.750002ZM1.44444 1.5V15.8969L5.73444 13.1124C6.20283 12.8085 6.79717 12.8085 7.26556 13.1124L11.5556 15.8969V1.5H1.44444Z" fill="black"/>
                            <path d="M0.677124 17.3907V1.21875L12.1875 0.515625V17.3907L6.77087 13.875L0.677124 17.3907Z" fill="black"/>
                            </svg>
                        </button>
                        </li>
                    );
                })
            ) : (
                <li className="text-gray-500">No items found</li>
            )}
        </ul>

    )
}