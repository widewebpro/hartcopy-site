import Link from 'next/link'
export const dynamic = 'force-static'
import Header from '@/components/Header'
export default function NotFound() {
  return (
    <div className="container md:flex">
      <div className="w-[18.75rem] max-w-[18.75rem] flex-shrink-0 max-h-[calc(100vh-3rem)] h-screen overflow-hidden hidden md:flex flex-col bg-light-white pt-16 pl-16 pb-8 pr-8 rounded-lg">
        <Header />
      </div>
      <div className="md:hidden w-[calc(100%-1.5rem)] fixed top-12 left-12 right-12 z-50">
        <Header />
      </div>
      <div className="w-full justify-center items-center md:flex md:flex-col md:ml-8 md:max-h-[calc(100vh-3rem)] md:h-screen md:overflow-hidden text-center pt-75 md:pt-0">
        <h1 className=" text-[2rem] md:text-6xl font-bold mb-20">404 - Page Not Found</h1>
        <p className="mb-8">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
        <Link
          href="/"
          className="text-red hover:underline rounded"
        >
          Return to homepage
        </Link>
      </div>

    </div>
  )
}