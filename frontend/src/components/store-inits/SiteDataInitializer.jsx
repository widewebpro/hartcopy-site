'use client'

import { useEffect } from 'react'
import { useSiteStore } from '@/store/useSiteStore'

export function SiteDataInitializer({ data }) {
  const setSiteData = useSiteStore((state) => state.setSiteData)

  useEffect(() => {
    setSiteData(data)
  }, [data, setSiteData])

  return null
}