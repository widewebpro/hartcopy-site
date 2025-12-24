'use client'

import { useRouter, usePathname } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()
  const pathname = usePathname()

  if (pathname === '/') return null

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <button
      onClick={handleBack}
      aria-label="Back"
      className="flex items-center gap-8 active:outline active:outline-red"
    >
      <svg width="12" height="11" className='w-12 h-11' viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 5.41418L1 5.41418M1 5.41418L5 9.41418M1 5.41418L5 1.41418" stroke="#E62B25" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
    </svg>

    </button>
  )
}