"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Logo from "../public/jci logo.png"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Reports", href: "/reports" },
  { name: "Team", href: "/team" },
  { name: "Contact Us", href: "/contact" },
  { name: "Developers", href: "/developers" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3">
      <div className="flex items-center justify-between">
  {/* Logo */}
  <Link href="/" className="flex items-center space-x-2">
    {/* Replace this div with actual logo image */}
    <Image
      src={Logo} // Update this path
      alt="JCI Ponda Logo"
      width={110}
      height={100}
      // className="h-10 w-10 rounded-md object-cover"
    />
  
  </Link>

  {/* Desktop Navigation */}
  <div className="hidden md:flex items-center space-x-6">
    {navLinks.map((link) => (
      <Link
        key={link.name}
        href={link.href}
        className={cn(
          "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400",
          pathname === link.href
            ? "text-blue-600 dark:text-blue-400"
            : "text-gray-700 dark:text-gray-200",
        )}
      >
        {link.name}
      </Link>
    ))}
    <ThemeToggle />
  </div>

  {/* Mobile Navigation Toggle */}
  <div className="flex items-center md:hidden">
    <ThemeToggle />
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="ml-2 p-2 text-gray-700 dark:text-gray-200"
      aria-label="Toggle menu"
    >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>
</div>


        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block py-2 px-4 text-sm font-medium rounded-md transition-colors",
                  pathname === link.href
                    ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

