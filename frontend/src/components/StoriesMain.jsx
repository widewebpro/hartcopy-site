'use client'

import { useStoriesStore } from "@/store/useStoriesStore";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimatedCard from "./AnimatedCard";
import { formatDateWithTextMonth } from "@/helpers/formatDate";
export default function StoriesMain({ slug }) {

    const activeStory = useStoriesStore(state =>
        state.stories.find(s => s.slug === slug)
    )
    const [showScrollHint, setShowScrollHint] = useState(true)

    const containerRef = useRef(null)

    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        const onScroll = () => {
            if (el.scrollTop > 20) {
                setShowScrollHint(false)
            } else {
                setShowScrollHint(true)
            }
        }

        el.addEventListener('scroll', onScroll)
        return () => el.removeEventListener('scroll', onScroll)
    }, [])
    useEffect(() => {
        if (!activeStory || !containerRef.current) return

        containerRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }, [activeStory])
    return (
        <AnimatedCard className="w-full md:flex md:flex-col md:ml-12 md:max-h-[calc(100vh-3rem)] md:h-screen md:overflow-hidden rounded-[0.5rem]">
            <div ref={containerRef} className='h-full md:flex-1 md:overflow-y-scroll pt-71 md:pt-0 relative'>
                {activeStory &&
                    <div className="md:py-14 md:pl-16 md:pr-8 md:bg-light-white">
                        <div className="rounded-[0.5rem] mb-34 md:mb-29 md:px-28 md:py-21 max-h-[30.125rem] md:h-[30.125rem] w-[72vw] md:w-[unset] mx-auto relative overflow-hidden md:flex items-end">
                            <div className="md:absolute inset-0">
                                <Image width={1055} alt={activeStory.name} height={516} className="w-full h-full object-cover" src={activeStory.img} />

                            </div>
                            <div className="text-white-2 w-full relative hidden md:block">
                                <div className="pointer-events-none absolute hidden md:block w-[calc(100%+3.5rem)] left-[-1.75rem] bottom-[-1.313rem] inset-0 bg-gradient-to-b from-transparent to-[#141516]/60" />
                                <p className="text-[0.5rem] mb-12 relative">
                                    {activeStory.type}
                                </p>
                                <div className="max-w-[31.75rem] relative">
                                    <h1 className=" text-[1.875rem] leading-[2rem] mb-12">{activeStory.name}</h1>
                                    <h2 className="text-[0.75rem] leading-[0.75rem]">{activeStory.subtitle}</h2>
                                </div>

                            </div>
                        </div>
                        <div className="bg-light-white md:bg-[unset] px-12 py-10 md:px-0 md:py-0 rounded-[8px] md:rounded-0">
                            <div className=" relative md:hidden">
                                <div className="flex justify-between items-center text-[0.5rem] mb-12">
                                    <p className="">
                                        {activeStory.type}
                                    </p>
                                    <p>
                                        {formatDateWithTextMonth(activeStory.dateUpload)}
                                    </p>
                                </div>

                                <h1 className=" text-[1.25rem] leading-[1.25rem] mb-8 md:mb-12">{activeStory.name}</h1>
                                <h2 className="text-[0.75rem] leading-[180%] mb-25 md:mb-0">{activeStory.subtitle}</h2>
                            </div>
                            <div className="md:ml-24 text-[0.5rem] md:text-[1.25rem] leading-[170%] md:leading-[1.563rem] pb-15 md:pb-40 max-w-[49.938rem]">
                                {activeStory.copy}
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: activeStory.description }} className="max-w-[27.5rem] mx-auto text-[0.5rem] md:text-[0.75rem] leading-[170%] py-15 md:py-40 text-primary [&_p]:indent-16">

                            </div>
                            <div className="md:grid max-w-[58.75rem] mx-auto grid-cols-3 gap-20 py-15 md:pt-40 md:pb-26">
                                {activeStory.images.map((el, i) => (
                                    <div key={i} className="aspect-[4/5] mb-20 md:mb-0">
                                        <Image alt={activeStory.name} width={300} height={375} className="w-full h-full object-cover" src={el} />

                                    </div>
                                )

                                )}
                            </div>
                        </div>


                    </div>

                }
                {showScrollHint && (
                    <div className="pointer-events-none sticky bottom-0 left-0 w-full h-58 items-end justify-center hidden md:flex">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#fffffa] to-transparent" />
                        <span className="relative mb-4 text-[0.5rem] md:text-[0.625rem] uppercase tracking-wide text-primary">
                            scroll for more
                        </span>
                    </div>
                )}
            </div>
        </AnimatedCard>
    )
}


