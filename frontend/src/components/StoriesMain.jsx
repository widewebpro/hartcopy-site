'use client'

import { useStoriesStore } from "@/store/useStoriesStore";
import { useEffect, useRef } from "react";
import Image from "next/image";
export default function StoriesMain({ slug }) {

    const activeStory = useStoriesStore(state =>
        state.stories.find(s => s.slug === slug)
    )
    const containerRef = useRef(null)
    useEffect(() => {
        if (!activeStory || !containerRef.current) return

        containerRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }, [activeStory])
    return (
        <div className="w-full md:flex md:flex-col md:ml-8 md:max-h-[calc(100vh-48px)] md:h-screen md:overflow-hidden">
            <div ref={containerRef} className='h-full md:flex-1 md:overflow-y-scroll pt-71 md:pt-0'>
                {activeStory &&
                    <div className="md:p-14 md:bg-light-white">
                        <div className="rounded-[8px] mb-34 md:mb-29 md:px-28 md:py-21 max-h-[600px] md:h-[600px] w-[72vw] md:w-[unset] mx-auto relative overflow-hidden md:flex items-end">
                            <div className="md:absolute inset-0">
                                <Image width={1084} alt={activeStory.name} height={600} className="w-full h-full object-cover" src={activeStory.img} />

                            </div>
                            <div className="text-white-2 max-w-[348px] relative hidden md:block">
                                <p className="text-[8px] mb-12">
                                    {activeStory.type}
                                </p>
                                <h1 className=" text-[30px] leading-[38px] mb-12">{activeStory.name}</h1>
                                <h2 className="text-[12px] leading-[12px]">{activeStory.subtitle}</h2>
                            </div>
                        </div>
                        <div className="bg-light-white md:bg-[unset] px-12 py-10 md:px-0 md:py-0">
                            <div className=" relative md:hidden">
                                <div className="flex justify-between items-center text-[8px] mb-12">
                                    <p className="">
                                        {activeStory.type}
                                    </p>
                                    <p>
                                        {activeStory.dateUpload}
                                    </p>
                                </div>

                                <h1 className=" text-[20px] leading-[20px] mb-12">{activeStory.name}</h1>
                                <h2 className="text-[12px] leading-[180%]">{activeStory.subtitle}</h2>
                            </div>
                            <div className="md:px-26 text-[8px] md:text-[20px] leading-[170%] md:leading-[25px] mb-30 md:mb-80">
                                {activeStory.copy}
                            </div>
                            <div className="max-w-[492px] mx-auto text-[8px] md:text-[12px] leading-[170%] mb-30 md:mb-80 text-primary">
                                {activeStory.description}
                            </div>
                            <div className="md:grid grid-cols-3 gap-20 md:px-55">
                                {activeStory.images.map((el, i) => (
                                    <div key={i} className="aspect-[4/5] mb-20 md:mb-0">
                                        <Image alt={activeStory.name} width={400} height={500} className="w-full h-full object-cover" src={el} />

                                    </div>
                                )

                                )}
                            </div>
                        </div>


                    </div>
                }
            </div>
        </div>

    )
}


