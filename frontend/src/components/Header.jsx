'use client'
import Navigation from './Navigation'
import Logo from './Logo'
import { useState } from 'react';
import BackButton from './BackButton';
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navigation bg-white">
      <div>
        <div className="md:mb-24 px-20 md:px-0 py-18 md:py-0 flex items-center justify-between">
          <Logo />
          <button
            className="md:hidden flex flex-col"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            {open ? (<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.1213 12.1213L7.12134 7.12134M7.12134 7.12134L2.12134 2.12134M7.12134 7.12134L12.1213 2.12134M7.12134 7.12134L2.12134 12.1213" stroke="#E62B25" stroke-width="3" stroke-linecap="square" stroke-linejoin="round" />
            </svg>)
              :
              (<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 13.5H14M0 7.5H14M0 1.5H14" stroke="#E62B25" stroke-width="3" stroke-linejoin="round" />
              </svg>)
            }
          </button>
          <div className='hidden md:block'>
            <BackButton/>
          </div>
        </div>
        <div className='hidden md:block'>
          <Navigation />
        </div>
        {open && (
          <div className="md:hidden w-full h-full fixed top-63 left-0 right-0 bottom-0 z-40 bg-light-grey">
            <div className="w-full h-full pt-20 px-6 pb-6 animate-slide-down">
              <Navigation />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
