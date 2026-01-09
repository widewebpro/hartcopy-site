'use client'
import { useGridStore } from "@/store/useGridStore"
import { useProductsStore } from "@/store/useProductStore"
import { useState, useRef, useEffect } from "react"
import InputComponent from "./InputComponent"

export default function BottomPanel({ page }) {
    const { randomizeProducts, sortProductsByAlphabet, sortProductsByDate, activeSort, resetSort, openSearch } = useProductsStore()
    const searchTerm = useProductsStore((state) => state.searchTerm)
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const [showInput, setShowInput] = useState(false)
    const { cols, increase, decrease, options } = useGridStore()
    const filterRef = useRef(null);
    const [thisIsMobile, setThisIsMobile] = useState(false)

    const handleSort = (sort) => {
        if (activeSort === sort) {
            resetSort()
            return
        }

        if (sort === 'az' || sort === 'za') {
            sortProductsByAlphabet(sort)
        } else {
            sortProductsByDate(sort)
        }
    }
    useEffect(() => {
        setThisIsMobile(window.innerWidth <= 769)
    }, [])
    useEffect(() => {
        if (searchTerm && thisIsMobile) {
            setShowInput(true)
        }
    }, [searchTerm, thisIsMobile])
    useEffect(() => {
        if (!isFilterOpen) return;

        const handleClickOutside = (e) => {
            if (filterRef.current && !filterRef.current.contains(e.target)) {
                setIsFilterOpen(false);
            }
        };

        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                setIsFilterOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEsc);
        };
    }, [isFilterOpen]);
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (page !== 'product') return

        const onScroll = () => {
            const vh = window.innerHeight
            setShow(window.scrollY >= vh)
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [page])
    return (
        <div className={`flex items-center bottom-pannel justify-between h-56 md:h-[unset] md:pb-18 md:pt-19 px-16 md:pl-16 md:pr-25 bg-light-white rounded-[0.75rem] md:rounded-[0.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.06)] md:shadow-none mt-auto fixed md:static bottom-24 left-12 right-12 w-[calc(100%-1.5rem)] md:w-full md:max-w-[calc(100%-4px)] transition-all duration-300 ${page == 'product' ? show ? 'opacity-100 translate-y-0 md:hidden' : 'opacity-0 translate-y-6 pointer-events-none md:hidden' : ''}`}>
            {!isFilterOpen &&
                <div className={`flex items-center justify-between md:hidden ${showInput ? 'w-full' : ''}`}>
                    <button onClick={() => {setShowInput(true); openSearch()}} className={`text-[0.625rem] uppercase mr-25 ${showInput ? 'text-red italic' : ''}`}>
                        Find
                    </button>
                    {showInput && <><InputComponent page={page} />
                        <svg onClick={() => setShowInput(false)} className="md:hidden ml-14" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4142 11.4142L6.41418 6.41422M6.41418 6.41422L1.41418 1.41422M6.41418 6.41422L11.4142 1.41422M6.41418 6.41422L1.41418 11.4142" stroke="black" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>
                    </>}


                </div>
            }

            {!showInput && page !== 'stories' &&

                <>
                    {
                        page !== 'bookmarks' && page !== 'product' && !showInput &&
                        <div className={`items-center ${isFilterOpen ? 'hidden md:flex' : 'flex'
                            }`}>
                            <span className="text-[0.625rem] md:text-[0.5rem] md:leading-[0.625rem] hidden md:block uppercase mr-17">Zoom</span>
                            <button
                                onClick={increase}
                                className="flex items-center text-[#000] hover:text-red active:outline active:outline-red transition-color duration-300 justify-center mr-48 md:mr-27 w-18 h-18 md:w-12 md:h-12 disabled:text-grey"
                                disabled={cols === options[options.length - 1]}
                            >
                                <svg width="5" height="1" viewBox="0 0 5 1" className="w-8 h-2 md:w-12 md:h-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 0.5H4.5" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
                                </svg>

                            </button>
                            <button
                                onClick={decrease}
                                className="flex items-center justify-center  w-18 h-18 md:w-12 md:h-12 text-[#000] hover:text-red active:outline active:outline-red transition-color duration-300 disabled:text-grey"
                                disabled={cols === options[0]}
                            >
                                <svg width="5" height="5" className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 2.495H4.5" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
                                    <path d="M2.5 0.5L2.5 4.5" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
                                </svg>


                            </button>
                        </div>
                    }

                    <div className={`flex  ${isFilterOpen ? 'w-full md:w-auto' : '' }`}>
                        <div className="w-full md:w-auto md:mr-48 relative flex"
                            ref={filterRef}>
                            <button
                                onClick={() => {setIsFilterOpen(true); openSearch()}}
                                className={`text-[0.625rem] md:text-[0.5rem] md:leading-[0.625rem] uppercase hover:text-red hover:italic transition-color duration-300 ${isFilterOpen ? 'hidden md:block text-red italic' : ''}`}
                            >
                                Filter
                            </button>
                            {isFilterOpen && (
                                <div className=" flex items-center justify-between w-full ">
                                    <div
                                        className={`block w-full md:hidden text-left px-12 py-8 md:py-0 text-[0.625rem] md:text-[0.5rem] md:leading-[0.625rem] uppercase text-red italic`}
                                    >
                                        Filter
                                    </div>
                                    <button
                                        onClick={() => handleSort('az')}
                                        className={`block w-full text-left px-12 py-8 md:py-0 text-[0.625rem] md:text-[0.5rem] md:leading-[0.625rem] uppercase hover:text-red`}
                                    >
                                        <span className="relative"> <span className={`${activeSort && activeSort !== 'az' ? 'opacity-25 hover:opacity-100' : ''}`}>A–Z</span>
                                            {activeSort === 'az' &&
                                                <svg width="20" className="absolute left-[50%] transform translate-x-[-50%] bottom-[-5]" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.2369 4L20 3.20502L17.6888 0.79749L17.6913 0.794979L16.9281 0L16.9257 0.00250913L16.9233 0L16.1603 0.794979L16.1627 0.79749L14.6172 2.40753L13.0716 0.79749L13.074 0.794979L12.3109 0L12.3086 0.00250913L12.3062 0L11.5431 0.794979L11.5455 0.79749L10 2.40753L8.45449 0.79749L8.45678 0.794979L7.69379 0L7.69138 0.00250913L7.68897 0L6.92586 0.794979L6.92827 0.79749L5.38276 2.40753L3.83726 0.79749L3.83967 0.794979L3.07655 0L3.07414 0.00250913L3.07173 0L2.30862 0.794979L2.31103 0.79749L0 3.20502L0.763115 4L3.07414 1.59247L4.61965 3.20251L4.61724 3.20502L5.38035 4L5.38276 3.99749L5.38517 4L6.14829 3.20502L6.14588 3.20251L7.69138 1.59247L9.23688 3.20251L9.23448 3.20502L9.99759 4L10 3.99749L10.0024 4L10.7655 3.20502L10.7631 3.20251L12.3086 1.59247L13.8541 3.20251L13.8517 3.20502L14.6148 4L14.6172 3.99749L14.6196 4L15.3828 3.20502L15.3804 3.20251L16.9257 1.59247L19.2369 4Z" fill="#E62B25" />
                                                </svg>
                                            }

                                        </span>


                                    </button>

                                    <button
                                        onClick={() => handleSort('newest')}
                                        className="block w-full text-left px-12 py-8 md:py-0 text-[0.625rem] md:text-[0.5rem] md:leading-[0.625rem] uppercase hover:text-red"
                                    >
                                        <span className="relative">
                                           <span className={`${activeSort && activeSort !== 'newest' ? 'opacity-25 hover:opacity-100' : ''}`}>Newest</span> 
                                            {activeSort === 'newest' &&
                                                <svg width="20" className="absolute left-[50%] transform translate-x-[-50%] bottom-[-5]" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.2369 4L20 3.20502L17.6888 0.79749L17.6913 0.794979L16.9281 0L16.9257 0.00250913L16.9233 0L16.1603 0.794979L16.1627 0.79749L14.6172 2.40753L13.0716 0.79749L13.074 0.794979L12.3109 0L12.3086 0.00250913L12.3062 0L11.5431 0.794979L11.5455 0.79749L10 2.40753L8.45449 0.79749L8.45678 0.794979L7.69379 0L7.69138 0.00250913L7.68897 0L6.92586 0.794979L6.92827 0.79749L5.38276 2.40753L3.83726 0.79749L3.83967 0.794979L3.07655 0L3.07414 0.00250913L3.07173 0L2.30862 0.794979L2.31103 0.79749L0 3.20502L0.763115 4L3.07414 1.59247L4.61965 3.20251L4.61724 3.20502L5.38035 4L5.38276 3.99749L5.38517 4L6.14829 3.20502L6.14588 3.20251L7.69138 1.59247L9.23688 3.20251L9.23448 3.20502L9.99759 4L10 3.99749L10.0024 4L10.7655 3.20502L10.7631 3.20251L12.3086 1.59247L13.8541 3.20251L13.8517 3.20502L14.6148 4L14.6172 3.99749L14.6196 4L15.3828 3.20502L15.3804 3.20251L16.9257 1.59247L19.2369 4Z" fill="#E62B25" />
                                                </svg>
                                            }
                                        </span>
                                    </button>

                                    <button
                                        onClick={() => handleSort('oldest')}

                                        className="block w-full text-left px-12 py-8 md:py-0 text-[0.625rem] md:text-[0.5rem] md:leading-[0.625rem] uppercase hover:text-red"
                                    >
                                        <span className="relative">
                                            <span className={`${activeSort && activeSort !== 'oldest' ? 'opacity-25 hover:opacity-100' : ''}`}>Oldest</span>
                                            {activeSort === 'oldest' &&
                                                <svg width="20" className="absolute left-[50%] transform translate-x-[-50%] bottom-[-5]" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.2369 4L20 3.20502L17.6888 0.79749L17.6913 0.794979L16.9281 0L16.9257 0.00250913L16.9233 0L16.1603 0.794979L16.1627 0.79749L14.6172 2.40753L13.0716 0.79749L13.074 0.794979L12.3109 0L12.3086 0.00250913L12.3062 0L11.5431 0.794979L11.5455 0.79749L10 2.40753L8.45449 0.79749L8.45678 0.794979L7.69379 0L7.69138 0.00250913L7.68897 0L6.92586 0.794979L6.92827 0.79749L5.38276 2.40753L3.83726 0.79749L3.83967 0.794979L3.07655 0L3.07414 0.00250913L3.07173 0L2.30862 0.794979L2.31103 0.79749L0 3.20502L0.763115 4L3.07414 1.59247L4.61965 3.20251L4.61724 3.20502L5.38035 4L5.38276 3.99749L5.38517 4L6.14829 3.20502L6.14588 3.20251L7.69138 1.59247L9.23688 3.20251L9.23448 3.20502L9.99759 4L10 3.99749L10.0024 4L10.7655 3.20502L10.7631 3.20251L12.3086 1.59247L13.8541 3.20251L13.8517 3.20502L14.6148 4L14.6172 3.99749L14.6196 4L15.3828 3.20502L15.3804 3.20251L16.9257 1.59247L19.2369 4Z" fill="#E62B25" />
                                                </svg>
                                            }
                                        </span>

                                    </button>

                                    <div onClick={() => setIsFilterOpen(false)} className="flex-shrink-0 px-12 cursor-pointer ">
                                        <svg width="13" height="13" className="md:w-8 md:h-8" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4142 11.4142L6.41418 6.41422M6.41418 6.41422L1.41418 1.41422M6.41418 6.41422L11.4142 1.41422M6.41418 6.41422L1.41418 11.4142" stroke="black" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                                        </svg>
                                    </div>

                                </div>
                            )}
                        </div>

                        <button
                            onClick={randomizeProducts}
                            className="text-[0.625rem] md:text-[0.5rem] md:leading-[0.625rem] hidden md:block uppercase hover:text-red hover:italic transition-color duration-300"
                        >
                            Random
                        </button>
                    </div>
                </>}
            <div className="h-80 absolute w-[calc(100%+1.5rem)] left-[-0.75rem] bottom-[-1.5rem] bg-gradient-to-t from-[#fffffa] to-transparent md:hidden">
                
            </div>                
        </div>
    )
}