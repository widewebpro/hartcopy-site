'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useSiteStore } from '@/store/useSiteStore'

export default function Logo() {
  const { siteName, logo } = useSiteStore()
  return (
    <Link href="/" className="text-red-600 block">
      {logo?.url && (
        <>
          <span className="sr-only">{siteName}</span>
          <Image 
            src={logo.url}
            alt={siteName}
            width={40}
            height={40}
            className="w-64 h-13"
          />
        </>
      )}
    </Link>
  )
}
