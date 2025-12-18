'use client'

import React from "react";
import Sidebar from "@/components/Sidebar";
import MainSection from "@/components/MainSection";
import { StoriesInitializer } from "@/components/store-inits/StoriesInitializer";
import { rawStories } from "@/helpers/stories";
import Header from "@/components/Header";
import StoriesList from "@/components/StoriesList";
import StoriesMain from "@/components/StoriesMain";
import { useStoriesStore } from "@/store/useStoriesStore";
import BottomPanel from "@/components/BottomPanel";
import { useState, useEffect } from "react";
export default function SoriesPage() {
    const [thisIsMobile, setThisIsMobile] = useState(false)
    const selectedStories = useStoriesStore((state) => state.selectedStories)
    useEffect(() => {
        setThisIsMobile(window.innerWidth <= 769)
    }, [])
    return (
        <div className="container md:flex">
          {thisIsMobile &&
          <div className="md:hidden w-[calc(100%-24px)] fixed top-12 left-12 right-12 z-50">
              <Header />
          </div>
          }
          
          <StoriesInitializer stories={rawStories} />
            
            {thisIsMobile ? 
              <div>
                {selectedStories ? 
                  <StoriesMain/>
                 :
                <>
                <StoriesList/>
                <BottomPanel page={'stories'}/>
                </>
                

                }
                
              </div>
              :
                <><Sidebar page={'stories'} />
            <MainSection page={'stories'} /></>
            }
        </div>
    );
}