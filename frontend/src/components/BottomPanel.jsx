'use client'
import { useGridStore } from "@/store/useGridStore"
import { useProductsStore } from "@/store/useProductStore"
import { useState } from "react"
import InputComponent from "./InputComponent"
export default function BottomPanel({ page }) {
    const { randomizeProducts, sortProductsByAlphabet } = useProductsStore()
    const searchTerm = useProductsStore((state) => state.searchTerm)
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const [showInput, setShowInput] = useState(searchTerm ? true : false)
    const { cols, increase, decrease, options } = useGridStore()
    return (
        <div className="flex items-center justify-between h-52 md:h-[unset] md:py-18 pl-18 pr-14 md:pl-16 md:pr-25 bg-light-white rounded-[8px] mt-auto fixed md:static bottom-24 left-12 right-12 w-[calc(100%-24px)] md:w-full">
            <div className={`flex items-center justify-between md:hidden ${showInput ? 'w-full' : ''}`}>
                <button onClick={() => setShowInput(!showInput)} className="text-[10px] mr-25">
                    Find
                </button>
                {showInput && <InputComponent page={page} />}
            </div>
            {!showInput && page !== 'stories' &&

                <>
                    {
                        page !== 'bookmarks' &&
                        <div className="flex items-center">
                            <span className="text-[10px] md:text-[8px] hidden md:block uppercase mr-17">Zoom</span>
                            <button
                                onClick={increase}
                                className="flex items-center justify-center mr-27 w-8 h-8"
                                 disabled={cols === options[options.length - 1]}
                            >
                                <svg width="5" height="1" viewBox="0 0 5 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 0.5H4.5" stroke="black" strokeLinecap="square" strokeLinejoin="round" />
                                </svg>

                            </button>
                            <button
                                onClick={decrease}
                                className="flex items-center justify-center w-8 h-8"
                                disabled={cols === options[0]}
                            >
                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 2.495H4.5" stroke="black" strokeLinecap="square" strokeLinejoin="round" />
                                    <path d="M2.5 0.5L2.5 4.5" stroke="black" strokeLinecap="square" strokeLinejoin="round" />
                                </svg>


                            </button>
                        </div>
                    }

                    <div className="flex">
                        <div className="mr-48 relative">
                            <button
                                onClick={() => setIsFilterOpen(v => !v)}
                                className="text-[10px] md:text-[8px] uppercase "
                            >
                                Filter
                            </button>
                            {isFilterOpen && (
                                <div className="absolute left-0 bottom-full mt-8 bg-light-white rounded-[8px] shadow-md z-50 w-[100px]">
                                    <button
                                        onClick={() => {
                                            sortProductsByAlphabet('az')
                                            setIsFilterOpen(false)
                                        }}
                                        className="block w-full text-left px-12 py-8 text-[10px] uppercase hover:bg-gray-100"
                                    >
                                        A–Z
                                    </button>

                                    <button
                                        onClick={() => {
                                            sortProductsByAlphabet('za')
                                            setIsFilterOpen(false)
                                        }}
                                        className="block w-full text-left px-12 py-8 text-[10px] uppercase hover:bg-gray-100"
                                    >
                                        Z–A
                                    </button>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={randomizeProducts}
                            className="text-[10px] md:text-[8px] hidden md:block uppercase"
                        >
                            Random
                        </button>
                    </div>
                </>}

        </div>
    )
}