import React, { forwardRef } from "react"
import Image from "next/image"
import { RiArrowDropDownLine } from "react-icons/ri"
import { IoSearch } from "react-icons/io5"

const navItems = [
  { label: "NEWS", href: "#news" },
  { label: "EDITORIAL", href: "#editorial" },
  { label: "FEATURE", href: "#feature" },
  { label: "SPORTS", href: "#sports" },
  { label: "MORE" }
]

const Header = forwardRef<HTMLElement>((props, headerRef) => {
  return (
    <header ref={headerRef} className="fixed flex border-b-4 bg-white border-black shadow-md shadow-black/10 z-100 w-full h-auto px-6 py-4 items-center justify-between">
      <div className="logos flex items-center justify-between space-x-2.5">
        <div className="tmb-logo">
          <Image src="/images/tmb_logo_black.png" alt="The Motherboard Logo" width={35} height={35} />
        </div>
        <div className="tmb-wordmark">
          <Image src="/images/tmb_wordmark.png" alt="The Motherboard Wordmark" width={250} height={250} />
        </div>
      </div>
      <nav>
        <div className="flex items-center justify-between space-x-4">
          <div className="nav-items flex items-center justify-between space-x-7 font-monasans font-semibold text-sm md:text-lg">
            {navItems.map((item) => 
              item.href? (
                <a 
                  key={item.label} 
                  href={item.href}
                >
                  {item.label}
                </a>
              ) : (
                <span 
                  key={item.label}
                  className="flex items-center space-x-0.5"
                >
                  {item.label}
                  <RiArrowDropDownLine className="text-sm md:text-4xl" />
                </span>
              )
            )}
          </div>
          <IoSearch className="text-sm md:text-3xl" />
        </div>
      </nav>
    </header>
  )
})

export default Header