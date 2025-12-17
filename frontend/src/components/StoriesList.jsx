'use client'
import { useState } from "react";
import { useStoriesStore } from "@/store/useStoriesStore";

export default function StoriesList() {
     const searchTerm = useStoriesStore((state) => state.searchTerm)
     const stories = useStoriesStore((state) => state.stories)
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const getFilteredStories = useStoriesStore(
        (state) => state.getFilteredStories
    )

    const setSelectedStories = useStoriesStore(
        (state) => state.setSelectedStories
    )
    
    const filteredStories = getFilteredStories()
    return (
        <ul className="md:flex-1 md:overflow-y-scroll mb-4 pt-70 md:pt-0 md:mt-32 pb-25">
            {filteredStories.length > 0 ? (
                filteredStories.map((p, i) => {
                    return (
                        <li
                            key={i}
                            className={`text-[8px] ${hoveredIndex && hoveredIndex !== (i + 1) ?  'opacity-25' :  ''} cursor-pointer text-black mb-9 last:mb-0 rounded-[8px] md:rounded-0 overflow-hidden`}
                            onClick={() => setSelectedStories(p)}
                            onMouseEnter={() => { setHoveredIndex(i + 1) }}
                            onMouseLeave={() => { setHoveredIndex(null) }}
                        >
                        <div className="flex">
                            <div className="w-108 flex-shrink-0">
                                <img className="w-full object-contain" src={p.img} alt="" />
                            </div>
                            <div className="p-8 w-full bg-white md:bg-light-grey">
                                <div className="flex justify-between mb-8">
                                    <p>
                                        {p.type}
                                    </p>
                                    <p>
                                        {p.dateUpload}
                                    </p>
                                </div>
                                <p className="text-[14px] leading-[16px]">
                                    {p.name}
                                </p>
                            </div>
                        </div>
                            
                        </li>
                    );
                })
            ) : (
                <li className="text-gray-500">No stories found</li>
            )}
        </ul>

    )
}