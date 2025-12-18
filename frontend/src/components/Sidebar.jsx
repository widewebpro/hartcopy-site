import Header from "./Header";
import SideList from "./SideList";
export default function Sidebar ({page}) {
    return (
        <div className="w-[18.75rem] max-w-[18.75rem] flex-shrink-0 max-h-[calc(100vh-3rem)] h-screen overflow-hidden hidden md:flex flex-col bg-light-white pt-16 pl-16 pb-8 pr-8 rounded-lg">
            <Header />
            <SideList page={page} />
        </div>
       
    )
}