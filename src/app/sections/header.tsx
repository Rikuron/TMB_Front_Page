import React, { forwardRef, useState } from "react"
import Image from "next/image"
import { RiArrowDropDownLine } from "react-icons/ri"
import { IoSearch, IoClose } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx"

const navItems = [
  { label: "NEWS", href: "#news" },
  { label: "EDITORIAL", href: "#editorial" },
  { label: "FEATURE", href: "#feature" },
  { label: "SPORTS", href: "#sports" },
  { label: "MORE" }
]

const Header = forwardRef<HTMLElement>((props, headerRef) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => { setIsMobileMenuOpen(!isMobileMenuOpen) }
  const closeMobileMenu = () => { setIsMobileMenuOpen(false) }

  return (
    <>
      <header ref={headerRef} className="fixed flex border-b-4 bg-white border-black shadow-md shadow-black/10 z-50 w-full h-auto px-6 py-4 items-center justify-between">
        <div className="logos flex items-center justify-between space-x-2.5">
          <div className="tmb-logo">
            <Image src="/images/tmb_logo_black.png" alt="The Motherboard Logo" width={35} height={35} />
          </div>
          <div className="tmb-wordmark">
            <Image src="/images/tmb_wordmark.png" alt="The Motherboard Wordmark" width={250} height={250} />
          </div>
        </div>
        <div className="flex items-center justify-between space-x-4">
          {/* Desktop Navigation */}
          <nav className="nav-container hidden md:block">
            <div className="nav-items flex items-center justify-between space-x-7 font-monasans font-semibold text-sm md:text-lg">
              {navItems.map((item) => 
                item.href? (
                  <a 
                    key={item.label} 
                    href={item.href}
                    className="hover:text-custom-blue transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span 
                    key={item.label}
                    className="flex items-center space-x-0.5 cursor-pointer hover:text-custom-blue transition-colors duration-200"
                  >
                    {item.label}
                    <RiArrowDropDownLine className="text-sm md:text-4xl" />
                  </span>
                )
              )}
            </div>
          </nav>
          <IoSearch className="text-2xl md:text-3xl cursor-pointer hover:text-custom-blue transition-colors duration-200" />
          <RxHamburgerMenu 
            className="text-2xl md:hidden cursor-pointer hover:text-custom-blue transition-colors duration-200" 
            onClick={toggleMobileMenu}
          />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold font-monasans">Menu</h2>
            <IoClose 
              className="text-2xl cursor-pointer hover:text-custom-blue transition-colors duration-200"
              onClick={closeMobileMenu}
            />
          </div>

          {/* Mobile Navigation Items */}
          <nav className="flex-1 px-6 py-4">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => 
                item.href? (
                  <a 
                    key={item.label} 
                    href={item.href}
                    className="text-lg font-semibold font-monasans hover:text-custom-blue transition-colors duration-200 py-2"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span 
                    key={item.label}
                    className="flex items-center space-x-1 text-lg font-semibold font-monasans cursor-pointer hover:text-custom-blue transition-colors duration-200 py-2"
                  >
                    {item.label}
                    <RiArrowDropDownLine className="text-2xl" />
                  </span>
                )
              )}
            </div>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <IoSearch className="text-xl" />
              <span className="text-sm font-monasans">Search</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})

Header.displayName = "Header"

export default Header