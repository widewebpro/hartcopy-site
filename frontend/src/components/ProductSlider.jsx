'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import ProductDescription from './ProductDescription';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { useProductsStore } from "@/store/useProductStore"
import Image from 'next/image';
export default function ProductSlider() {
    const product = useProductsStore((state) => state.selectedProduct);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='md:h-full pt-37 md:pt-0 relative'>
            {product &&
                <>
                    <div className='md:h-full mx-[-0.75rem] md:mx-0 flex flex-col justify-start items-stretch w-[calc(100%+24px)] md:w-full md:pt-10 mb-5 md:mb-0 sticky top-61 md:static'>
                        <div className='pl-12 md:pl-10 text-[0.625rem] md:text-[0.875rem] md:leading-[1rem] mb-5 absolute top-12 md:top-5 md:right-5'>
                            {product.sku}
                        </div>

                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[Navigation, Thumbs]}
                            loop={true}
                            className='w-full flex-1'
                            navigation={{
                                prevEl: '.product-prev',
                                nextEl: '.product-next',
                            }}
                            breakpoints={{
                                768: {
                                    direction: 'vertical',
                                    navigation: false,
                                },
                            }}
                        >

                            <SwiperSlide>
                                <div className="w-full h-full flex justify-center items-center">

                                    <Image width={600} className="max-w-full max-h-full object-contain md:w-full" height={600} alt={product.name} src={product.image} />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full h-full flex justify-center items-center">
                                    <Image width={600} className="max-w-full max-h-full object-contain md:w-full" height={600} alt={product.name} src={product.image} />

                                </div>
                            </SwiperSlide>
                            <button
                                className="product-prev absolute w-24 h-22 left-24 top-1/2 -translate-y-1/2 z-10 md:hidden"
                                aria-label="Previous slide"
                            >
                                <svg width="12" className='w-24 h-22' height="11" viewBox="0 0 12 11" fill="none">
                                    <path
                                        d="M11 5.41418L1 5.41418M1 5.41418L5 9.41418M1 5.41418L5 1.41418"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="square"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            <button
                                className="product-next absolute w-24 h-22  right-24 top-1/2 -translate-y-1/2 z-10 md:hidden"
                                aria-label="Next slide"
                            >
                                <svg width="12" className='w-24 h-22' height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5.41418L11 5.41418M11 5.41418L7 1.41418M11 5.41418L7 9.41418" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                                </svg>

                            </button>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={8}
                            slidesPerView={'auto'}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className='mt-20 w-full !px-12 md:!px-0 md:ml-[-1px] md:!absolute md:!bottom-0'
                        >
                            <SwiperSlide className=' h-56 w-93 max-w-93 max-h-56 cursor-pointer md:w-122 md:h-122 bg-light-white md:max-w-122 md:pt-17 md:pb-9 md:max-h-122 rounded-[5px] md:rounded-[8px] overflow-hidden opacity-25 hover:opacity-100 transition-opacity duration-300'>
                                <Image width={122} className=" h-56  w-93 max-w-93 max-h-56 md:w-full md:h-96 md:max-w-full md:max-h-96 object-contain md:mx-auto" height={122} alt={product.name} src={product.image} />

                            </SwiperSlide>
                            <SwiperSlide className=' h-56 w-93 max-w-93 max-h-56 cursor-pointer md:w-122 md:h-122 bg-light-white md:max-w-122 md:pt-17 md:pb-9 md:max-h-122 rounded-[5px] md:rounded-[8px] overflow-hidden opacity-25 hover:opacity-100 transition-opacity duration-300'>
                                <Image width={122} className=" h-56 w-93 max-w-93 max-h-56 md:w-full md:h-96 md:max-w-full md:max-h-96 object-contain md:mx-auto" height={122} alt={product.name} src={product.image} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div>
                        <ProductDescription />
                    </div>
                </>
            }
        </div>

    )
}


