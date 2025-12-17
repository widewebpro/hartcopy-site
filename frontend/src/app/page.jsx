
export const dynamic = 'force-static'
export const revalidate = 3600
import Sidebar from '@/components/Sidebar'
import MainSection from '@/components/MainSection'
import Header from '@/components/Header'
export default function Page() {
  return (
    <div className='container md:flex'>
       <div className="md:hidden w-[calc(100%-24px)] fixed top-12 left-12 right-12 z-50">
            <Header />
        </div>
      <Sidebar />
      <MainSection />
    </div>
  )
  
}