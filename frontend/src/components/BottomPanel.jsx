'use client'
import { useGridStore } from "@/store/useGridStore"
import { useProductsStore } from "@/store/useProductStore"
import { useState, useRef, useEffect } from "react"
import InputComponent from "./InputComponent"

export default function BottomPanel({ page }) {
    const { randomizeProducts, sortProductsByAlphabet } = useProductsStore()
    const searchTerm = useProductsStore((state) => state.searchTerm)
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const [showInput, setShowInput] = useState(searchTerm ? true : false)
    const { cols, increase, decrease, options } = useGridStore()
    const filterRef = useRef(null);
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
    return (
        <div className="flex items-center justify-between h-48 md:h-[unset] md:pb-18 md:pt-19 pl-18 pr-14 md:pl-16 md:pr-25 bg-light-white rounded-[0.5rem] mt-auto fixed md:static bottom-24 left-12 right-12 w-[calc(100%-1.5rem)] md:w-full md:max-w-[67.5rem]">
            <div className={`flex items-center justify-between md:hidden ${showInput ? 'w-full' : ''}`}>
                <button onClick={() => setShowInput(!showInput)} className="text-[0.625rem] uppercase mr-25">
                    Find
                </button>
                {showInput && <InputComponent page={page} />}
            </div>
            {!showInput && page !== 'stories' &&

                <>
                    {
                        page !== 'bookmarks' &&
                        <div className="flex items-center">
                            <span className="text-[0.625rem] md:text-[0.5rem] md:leading-[0.625rem] hidden md:block uppercase mr-17">Zoom</span>
                            <button
                                onClick={increase}
                                className="flex items-center text-[#000] hover:text-red transition-color duration-300 justify-center mr-58 md:mr-27 w-8 h-8"
                                disabled={cols === options[options.length - 1]}
                            >
                                <svg width="5" height="1" viewBox="0 0 5 1" className="w-8 h-2 md:w-[unset] md:h-[unset]" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 0.5H4.5" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
                                </svg>

                            </button>
                            <button
                                onClick={decrease}
                                className="flex items-center justify-center w-8 h-8 text-[#000] hover:text-red transition-color duration-300"
                                disabled={cols === options[0]}
                            >
                                <svg width="5" height="5" className="w-8 h-8 md:w-[unset] md:h-[unset]" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 2.495H4.5" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
                                    <path d="M2.5 0.5L2.5 4.5" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
                                </svg>


                            </button>
                        </div>
                    }

                    <div className="flex">
                        <div className="md:mr-48 relative flex"
                            ref={filterRef}>
                            <button
                                onClick={() => setIsFilterOpen(v => !v)}
                                className="text-[0.625rem] md:text-[0.5rem] md:leading-[0.625rem] uppercase hover:text-red transition-color duration-300"
                            >
                                Filter
                            </button>
                            {isFilterOpen && (
                                <div className="absolute right-0 md:left-0 bottom-full mt-8 bg-light-white rounded-[0.5rem] overflow-hidden shadow-md z-50 w-[6.25rem]">
                                    <button
                                        onClick={() => {
                                            sortProductsByAlphabet('az')
                                            setIsFilterOpen(false)
                                        }}
                                        className="block w-full text-left px-12 py-8 text-[0.625rem] uppercase hover:bg-gray-100"
                                    >
                                        A–Z
                                    </button>

                                    <button
                                        onClick={() => {
                                            sortProductsByAlphabet('za')
                                            setIsFilterOpen(false)
                                        }}
                                        className="block w-full text-left px-12 py-8 text-[0.625rem] uppercase hover:bg-gray-100"
                                    >
                                        Z–A
                                    </button>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={randomizeProducts}
                            className="text-[0.625rem] md:text-[0.5rem] md:leading-[0.625rem] hidden md:block uppercase hover:text-red transition-color duration-300"
                        >
                            Random
                        </button>
                    </div>
                </>}

        </div>
    )
}