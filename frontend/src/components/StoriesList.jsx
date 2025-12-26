'use client'
import { useState, useEffect, useRef } from "react";
import { useStoriesStore } from "@/store/useStoriesStore";
import Image from "next/image";
import Link from "next/link";
export default function StoriesList() {
     const searchTerm = useStoriesStore((state) => state.searchTerm)
     const stories = useStoriesStore((state) => state.stories)
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const getFilteredStories = useStoriesStore(
        (state) => state.getFilteredStories
    )

    const getActiveStory = useStoriesStore(
        (state) => state.getActiveStory
    )

    const setSelectedStories = useStoriesStore(
        (state) => state.setSelectedStories
    )
    const filteredStories = stories.filter(p => {
        const query = String(searchTerm).toLowerCase()

        return [
            p.name,
            p.type,
            p.dateUpload,
        ]
            .filter(Boolean)
            .some(field =>
                field.toString().toLowerCase().includes(query)
            )
    })
    const listRef = useRef(null)
    const itemRefs = useRef([])
    useEffect(() => {
        const activeIndex = filteredStories.findIndex(
            (p) => getActiveStory()?.slug === p.slug
        )
        if (activeIndex !== -1 && itemRefs.current[activeIndex]) {
            itemRefs.current[activeIndex].scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }
    }, [filteredStories, getActiveStory])
    return (
        <ul ref={listRef} className="md:flex-1 md:overflow-y-scroll mb-4 pt-54 md:pt-0 md:mt-33 pb-25 md:ml-[-0.625rem] md:mr-[-0.125rem]">
            {filteredStories.length > 0 ? (
                filteredStories.map((p, i) => {
                    const isSelected = getActiveStory().slug === p.slug
                    const opacityClass = isSelected ? '' : 'opacity-25'
                    return (
                        <li
                            key={i}
                            ref={(el) => (itemRefs.current[i] = el)}

                            className={`text-[0.5rem] ${opacityClass} hover:opacity-100 cursor-pointer text-black mb-8 md:mb-9 last:mb-0 md:last:mb-0 rounded-[0.5rem] md:rounded-0 overflow-hidden  md:bg-light-grey`}
                            onClick={() => setSelectedStories(p)}
                        >

                        <Link href={`/stories/${p.slug}`} className="flex items-stretch">
                            <div className="w-112 flex-shrink-0 relative">
                                <Image width={112} alt={p.name} height={151} className="w-full object-contain"  src={p.img} />
                                
                            </div>
                            <div className="p-8 w-full bg-light-white md:bg-light-grey">
                                <div className="flex justify-between mb-8">
                                    <p>
                                        {p.type}
                                    </p>
                                    <p>
                                        {p.dateUpload}
                                    </p>
                                </div>
                                <p className="text-[0.875rem] leading-[1rem]">
                                    {p.name}
                                </p>
                                {p.type === 'Interview' && 
                                <p className="line-clamp-2 md:hidden text-[0.75rem] mt-13">
                                    {p.subtitle}
                                </p>}
                            </div>
                        </Link>
                            
                        </li>
                    );
                })
            ) : (
                <li className="text-gray-500">No stories found</li>
            )}
        </ul>

    )
}