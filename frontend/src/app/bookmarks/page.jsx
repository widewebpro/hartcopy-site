'use client'
import Sidebar from '@/components/Sidebar'
import MainSection from '@/components/MainSection'
import Header from '@/components/Header'
import BookmarksMobile from '@/components/BookmarksMobile'
import BottomPanel from '@/components/BottomPanel'
export default function Bookmarks() {
    const thisIsMobile = window.innerWidth <= 769

    return (


        <div className='container md:flex'>
            <div className="md:hidden w-[calc(100%-24px)] fixed top-12 left-12 right-12 z-50">
                <Header />
            </div>
            {thisIsMobile ?
                <>
                    <BookmarksMobile />
                    <BottomPanel page={'bookmarks'} />
                </>
                :
                <>
                    <Sidebar />
                    <MainSection />
                </>
            }

        </div>
    )

}