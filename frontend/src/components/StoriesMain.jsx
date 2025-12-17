'use client'

import { useStoriesStore } from "@/store/useStoriesStore";
import { useEffect, useRef } from "react";
export default function StoriesMain() {
    const activeStory = useStoriesStore((s) => s.getActiveStory())
    const containerRef = useRef(null)
    useEffect(() => {
        if (!activeStory || !containerRef.current) return

        containerRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }, [activeStory])
    return (
        <div ref={containerRef} className='h-full md:flex-1 md:overflow-y-scroll pt-71 md:pt-0'>
            {activeStory &&
                <div className="md:p-14 md:bg-white">
                    <div className="rounded-[8px] mb-34 md:mb-29 md:px-28 md:py-21 max-h-[600px] md:h-[600px] w-[72vw] md:w-[unset] mx-auto relative overflow-hidden md:flex items-end">
                        <div className="md:absolute inset-0"><img className="w-full h-full object-cover" src={activeStory.img} alt="" /></div>
                        <div className="text-white-2 max-w-[348px] relative hidden md:block">
                            <p className="text-[8px] mb-12">
                                {activeStory.type}
                            </p>
                            <h1 className=" text-[30px] leading-[38px] mb-12">{activeStory.name}</h1>
                            <h2 className="text-[12px] leading-[12px]">{activeStory.subtitle}</h2>
                        </div>
                    </div>
                    <div className="bg-white md:bg-[unset] px-12 py-10 md:px-0 md:py-0">
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
                                    <img className="w-full h-full object-cover" src={el} alt="" />
                                </div>
                            )

                            )}
                        </div>
                    </div>


                </div>
            }
        </div>

    )
}


