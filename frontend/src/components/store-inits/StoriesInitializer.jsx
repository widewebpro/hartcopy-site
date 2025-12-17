'use client'

import { useEffect } from 'react'
import { useStoriesStore } from '@/store/useStoriesStore'
export function StoriesInitializer({ stories }) {
  const setStories = useStoriesStore((state) => state.setStories)

  useEffect(() => {
    if (stories) {
      setStories(stories)
    }
  }, [stories, setStories])

  return null
}