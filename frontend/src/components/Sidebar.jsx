import Header from "./Header";
import SideList from "./SideList";
export default function Sidebar ({page}) {
    return (
        <div className="w-[300px] max-w-[300px] flex-shrink-0 max-h-[calc(100vh-48px)] h-screen overflow-hidden hidden md:flex flex-col bg-light-white pt-16 pl-16 pb-8 pr-8 rounded-lg">
            <Header />
            <SideList page={page} />
        </div>
       
    )
}