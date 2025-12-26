'use client'
import Navigation from './Navigation'
import Logo from './Logo'
import { useState, useEffect } from 'react';
import BackButton from './BackButton';
import AnimatedCard from './AnimatedCard';
export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  return (
    <header className="navigation bg-light-white rounded-[0.5rem]">
      <AnimatedCard>
        <div className='absolute w-[calc(100%+1.5rem)] h-80 bg-light-grey top-[-1.5rem] left-[-0.75rem] md:hidden'>

        </div>
        <div className="md:mb-24 relative z-20 bg-light-white rounded-[0.5rem] md:bg-[unset] md:static px-20 md:px-0 pt-22 pb-21 md:py-0 flex items-center justify-between">
          <Logo />
          <button
            className="md:hidden flex flex-col"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            {open ? (<svg width="15" height="15" className='h-13' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.1213 12.1213L7.12134 7.12134M7.12134 7.12134L2.12134 2.12134M7.12134 7.12134L12.1213 2.12134M7.12134 7.12134L2.12134 12.1213" stroke="#E62B25" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" />
            </svg>)
              :
              (<svg width="14" height="15" className='h-13' viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 13.5H14M0 7.5H14M0 1.5H14" stroke="#E62B25" strokeWidth="3" strokeLinejoin="round" />
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
        
          <div className={`
    md:hidden fixed inset-0 top-63 z-10 bg-light-grey
    transition-all duration-800 ease-out
    ${open ? 'translate-y-0 opacity-100 pointer-events-auto' : 'opacity-0 -translate-y-[150%] pointer-events-none'}
  `}>
            <div className="w-full h-full pt-20 px-6 pb-6 animate-slide-down">
              <Navigation />
            </div>
          </div>
      
      </AnimatedCard>
    </header>
  )
}
