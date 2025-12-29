'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSiteStore } from '@/store/useSiteStore'

export default function Navigation() {
  const { pages } = useSiteStore()
  const pathname = usePathname()

  const normalizedPathname =
    pathname === '/' ? '/' : pathname.replace(/\/$/, '')

  const isActiveOrChild = (page) => {
    const pagePath = `${page.url}`
    if (pagePath === '/') {
      return normalizedPathname === '/';
    }
    return (
      normalizedPathname === pagePath ||
      normalizedPathname.startsWith(`${pagePath}`)
    )
  }

  const renderPageLinks = (pages) => {
    return pages.map(page => {
      const isActive = isActiveOrChild(page)

      return (
        <li key={page.id} role="none" className="relative mb-80 last:mb-0 md:mb-0 md:mr-24 md:last:mr-0">
          <Link
            href={`${page.url}`}
            role="menuitem"
            tabIndex={0}
            className={`text-[1.25rem] md:text-[0.5rem] outline-none hover:text-red uppercase transition-color duration-300 ${isActiveOrChild(page)
                ? 'text-red italic'
                : 'text-black'
              }`}
            aria-current={
              normalizedPathname === page.url ? 'page' : undefined
            }
          >
            {page.title}
          </Link>
          {page.children?.length > 0 && isActive && (
            <ul className="pl-4" role="menu">
              {renderPageLinks(page.children)}
            </ul>
          )}
        </li>
      )
    })
  }

  return (
    <nav className="sm:basis-2/3 grow-1 relative z-10" aria-label="Primary">
      <ul className="flex flex-col md:flex-row items-center pt-[18vh] md:pt-0" role="menubar">
        {renderPageLinks(pages)}
      </ul>
    </nav>
  )
}
