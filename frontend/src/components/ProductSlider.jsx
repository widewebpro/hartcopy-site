'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Mousewheel } from 'swiper/modules';
import { useState, useEffect } from 'react';
import ProductDescription from './ProductDescription';
import ProductsList from './ProductsList';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { useProductsStore } from "@/store/useProductStore"
import Image from 'next/image';
export default function ProductSlider() {
    const product = useProductsStore((state) => state.selectedProduct);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const isSearchOpen = useProductsStore((state) => state.isSearchOpen)
    const closeSearch = useProductsStore((state) => state.closeSearch)
     useEffect(() => {
        if (isSearchOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
    
        return () => {
          document.body.style.overflow = '';
        };
      }, [isSearchOpen]);
    return (
        <div className='md:h-full pt-37 md:pt-0 relative md:pl-16'>
            {product &&
                <>
                    <div className='md:h-full mx-[-0.75rem] md:mx-0 flex flex-col justify-start items-stretch w-[calc(100%+24px)] md:w-full md:pt-10 mb-5 md:mb-0 sticky top-80 md:static'>
                        <div className='pl-12 md:pl-10 text-[0.625rem] md:text-[0.875rem] md:leading-[1rem] mb-5 absolute top-12 md:top-5 md:right-5'>
                            {product.sku}
                        </div>

                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[Navigation, Thumbs, Mousewheel]}
                            mousewheel={true}
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
                                <div className="w-full h-full flex justify-center items-center px-24 md:px-0">

                                    <Image width={600} className="max-w-full max-h-full object-contain md:w-full" height={600} alt={product.name} src={product.image} />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full h-full flex justify-center items-center px-24 md:px-0">
                                    <Image width={600} className="max-w-full max-h-full object-contain md:w-full" height={600} alt={product.name} src={product.image} />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full h-full flex justify-center items-center px-24 md:px-0">
                                    <Image width={600} className="max-w-full max-h-full object-contain md:w-full" height={600} alt={product.name} src={product.image} />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full h-full flex justify-center items-center px-24 md:px-0">
                                    <Image width={600} className="max-w-full max-h-full object-contain md:w-full" height={600} alt={product.name} src={product.image} />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full h-full flex justify-center items-center px-24 md:px-0">
                                    <Image width={600} className="max-w-full max-h-full object-contain md:w-full" height={600} alt={product.name} src={product.image} />

                                </div>
                            </SwiperSlide>
                            <button
                                className="product-prev absolute w-12 h-1 left-12 top-1/2 -translate-y-1/2 z-10 md:hidden"
                                aria-label="Previous slide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-12 h-11' width="12" height="11" viewBox="0 0 12 11" fill="none">
                                    <path d="M11 4.41421H12V6.41421H11V5.41421V4.41421ZM1 5.41421L0.292893 6.12132C-0.0976311 5.7308 -0.0976311 5.09763 0.292893 4.70711L1 5.41421ZM4.29289 0.707107L5 9.50061e-08L6.41421 1.41421L5.70711 2.12132L5 1.41421L4.29289 0.707107ZM5.70711 8.70711L6.41421 9.41421L5 10.8284L4.29289 10.1213L5 9.41421L5.70711 8.70711ZM3.79289 1.20711C4.18342 0.816583 4.81658 0.816583 5.20711 1.20711C5.59763 1.59763 5.59763 2.2308 5.20711 2.62132L4.5 1.91421L3.79289 1.20711ZM5.20711 8.20711C5.59763 8.59763 5.59763 9.2308 5.20711 9.62132C4.81658 10.0118 4.18342 10.0118 3.79289 9.62132L4.5 8.91421L5.20711 8.20711ZM11 5.41421V6.41421H1V5.41421V4.41421H11V5.41421ZM1 5.41421L0.292893 4.70711L4.29289 0.707107L5 1.41421L5.70711 2.12132L1.70711 6.12132L1 5.41421ZM1 5.41421L1.70711 4.70711L5.70711 8.70711L5 9.41421L4.29289 10.1213L0.292893 6.12132L1 5.41421ZM1 5.41421L0.292893 4.70711L3.79289 1.20711L4.5 1.91421L5.20711 2.62132L1.70711 6.12132L1 5.41421ZM1 5.41421L1.70711 4.70711L5.20711 8.20711L4.5 8.91421L3.79289 9.62132L0.292893 6.12132L1 5.41421Z" fill="black" />
                                </svg>

                            </button>

                            <button
                                className="product-next absolute w-12 h-11  right-12 top-1/2 -translate-y-1/2 z-10 md:hidden"
                                aria-label="Next slide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-12 h-11' width="12" height="11" viewBox="0 0 12 11" fill="none">
                                    <path d="M1 4.41421H0V6.41421H1V5.41421V4.41421ZM11 5.41421L11.7071 6.12132C12.0976 5.7308 12.0976 5.09763 11.7071 4.70711L11 5.41421ZM7.70711 0.707107L7 9.50061e-08L5.58579 1.41421L6.29289 2.12132L7 1.41421L7.70711 0.707107ZM6.29289 8.70711L5.58579 9.41421L7 10.8284L7.70711 10.1213L7 9.41421L6.29289 8.70711ZM8.20711 1.20711C7.81658 0.816583 7.18342 0.816583 6.79289 1.20711C6.40237 1.59763 6.40237 2.2308 6.79289 2.62132L7.5 1.91421L8.20711 1.20711ZM6.79289 8.20711C6.40237 8.59763 6.40237 9.2308 6.79289 9.62132C7.18342 10.0118 7.81658 10.0118 8.20711 9.62132L7.5 8.91421L6.79289 8.20711ZM1 5.41421V6.41421H11V5.41421V4.41421H1V5.41421ZM11 5.41421L11.7071 4.70711L7.70711 0.707107L7 1.41421L6.29289 2.12132L10.2929 6.12132L11 5.41421ZM11 5.41421L10.2929 4.70711L6.29289 8.70711L7 9.41421L7.70711 10.1213L11.7071 6.12132L11 5.41421ZM11 5.41421L11.7071 4.70711L8.20711 1.20711L7.5 1.91421L6.79289 2.62132L10.2929 6.12132L11 5.41421ZM11 5.41421L10.2929 4.70711L6.79289 8.20711L7.5 8.91421L8.20711 9.62132L11.7071 6.12132L11 5.41421Z" fill="black" />
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
                            <SwiperSlide className=' h-56 w-70 max-w-70 max-h-56 cursor-pointer md:w-122 md:h-122 bg-light-white md:max-w-122 md:pt-17 md:pb-9 md:max-h-122 rounded-[5px] md:rounded-[8px] overflow-hidden opacity-25 md:opacity-100 hover:opacity-100 transition-opacity duration-300'>
                                <Image width={122} className=" h-56  w-70 max-w-70 max-h-56 md:w-full md:h-96 md:max-w-full md:max-h-96 object-contain md:mx-auto" height={122} alt={product.name} src={product.image} />

                            </SwiperSlide>
                            <SwiperSlide className=' h-56 w-70 max-w-70 max-h-56 cursor-pointer md:w-122 md:h-122 bg-light-white md:max-w-122 md:pt-17 md:pb-9 md:max-h-122 rounded-[5px] md:rounded-[8px] overflow-hidden opacity-25 md:opacity-100 hover:opacity-100 transition-opacity duration-300'>
                                <Image width={122} className=" h-56 w-70 max-w-70 max-h-56 md:w-full md:h-96 md:max-w-full md:max-h-96 object-contain md:mx-auto" height={122} alt={product.name} src={product.image} />
                            </SwiperSlide>
                            <SwiperSlide className=' h-56 w-70 max-w-70 max-h-56 cursor-pointer md:w-122 md:h-122 bg-light-white md:max-w-122 md:pt-17 md:pb-9 md:max-h-122 rounded-[5px] md:rounded-[8px] overflow-hidden opacity-25 md:opacity-100 hover:opacity-100 transition-opacity duration-300'>
                                <Image width={122} className=" h-56 w-70 max-w-70 max-h-56 md:w-full md:h-96 md:max-w-full md:max-h-96 object-contain md:mx-auto" height={122} alt={product.name} src={product.image} />
                            </SwiperSlide>
                            <SwiperSlide className=' h-56 w-70 max-w-70 max-h-56 cursor-pointer md:w-122 md:h-122 bg-light-white md:max-w-122 md:pt-17 md:pb-9 md:max-h-122 rounded-[5px] md:rounded-[8px] overflow-hidden opacity-25 md:opacity-100 hover:opacity-100 transition-opacity duration-300'>
                                <Image width={122} className=" h-56 w-70 max-w-70 max-h-56 md:w-full md:h-96 md:max-w-full md:max-h-96 object-contain md:mx-auto" height={122} alt={product.name} src={product.image} />
                            </SwiperSlide>
                            <SwiperSlide className=' h-56 w-70 max-w-70 max-h-56 cursor-pointer md:w-122 md:h-122 bg-light-white md:max-w-122 md:pt-17 md:pb-9 md:max-h-122 rounded-[5px] md:rounded-[8px] overflow-hidden opacity-25 md:opacity-100 hover:opacity-100 transition-opacity duration-300'>
                                <Image width={122} className=" h-56 w-70 max-w-70 max-h-56 md:w-full md:h-96 md:max-w-full md:max-h-96 object-contain md:mx-auto" height={122} alt={product.name} src={product.image} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div>
                        <ProductDescription />
                    </div>

                    {isSearchOpen && 
                        <div className='fixed block md:hidden product__product-list top-48 left-0 right-0 w-full h-full bg-light-grey flex px-20 pt-10 pb-110'>
                            <div onClick={() => closeSearch()} className='absolute top-40 right-10 text-red'>
                                x
                            </div>
                            <ProductsList/>
                        </div>
                    }
                </>
            }
        </div>

    )
}


