'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { rawStories } from '@/helpers/stories'
import StoriesList from '@/components/StoriesList'
import Header from '@/components/Header'
import BottomPanel from '@/components/BottomPanel'
import { StoriesInitializer } from '@/components/store-inits/StoriesInitializer'
export default function StoriesPage() {
  const router = useRouter()

  useEffect(() => {
    if (window.innerWidth > 769) {
      const firstSlug = rawStories[0]?.slug
      router.replace(`/stories/${firstSlug}`)
    }
  }, [router])

  return (
    <div className="container md:flex">
      <StoriesInitializer stories={rawStories} />
      
      <div className="md:hidden w-[calc(100%-24px)] fixed top-12 left-12 right-12 z-50">
        <Header />
      </div>
      <StoriesList />
      <BottomPanel page="stories" />
    </div>
  )
}