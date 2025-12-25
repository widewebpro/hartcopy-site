'use client'
import Header from "./Header";
import SideList from "./SideList";
import AnimatedCard from "./AnimatedCard";
export default function Sidebar ({page}) {
    return (
        <AnimatedCard className="w-[18.75rem] max-w-[18.75rem] flex-shrink-0 max-h-[calc(100vh-3rem)] h-screen overflow-hidden hidden md:flex flex-col bg-light-white pt-16 pl-16 md:pl-20 pb-8 pr-8 md:pr-12 rounded-lg">
            <Header />
            <SideList page={page} />
        </AnimatedCard>
       
    )
}