"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Events", href: "/events" },
  {
    name: "Reports",
    href: "#",
    dropdown: true,
    items: [
      { name: "Events Reports", href: "/reports" },
      { name: "Press Coverage", href: "/press-coverage" },
    ],
  },
  {
    name: "Team",
    href: "#",
    dropdown: true,
    items: [
      { name: "Local Governing Board", href: "/team" },
      { name: "Junior Jaycee Wing", href: "/junior-jaycee" },
    ],
  },
  { name: "SSP", href: "/ssp" },
  { name: "JCOM", href: "/jcom" },
  { name: "Contact Us", href: "/contact" },
  { name: "Developers", href: "/developers" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({})
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div>
              <img src="/JCI-logo.png" alt="JCI LOGO" id="IMAGE" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden ipad:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <button
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 flex items-center",
                      pathname.startsWith(link.items[0].href)
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-200",
                    )}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {link.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
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
              )
            )}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center ipad:hidden">
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
          <div className="ipad:hidden py-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              const isDropdownOpen = openDropdowns[link.name]

              if (link.dropdown) {
                return (
                  <div key={link.name} className="px-4">
                    <button
                      onClick={() =>
                        setOpenDropdowns((prev) => ({
                          ...prev,
                          [link.name]: !prev[link.name],
                        }))
                      }
                      className="w-full flex justify-between items-center py-2 text-sm font-medium text-left text-gray-700 dark:text-gray-200"
                    >
                      {link.name}
                      <ChevronDown
                        className={cn("ml-2 h-4 w-4 transition-transform", {
                          "rotate-180": isDropdownOpen,
                        })}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className="pl-4 space-y-2">
                        {link.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                              "block py-2 px-4 text-sm font-medium rounded-md transition-colors",
                              pathname === item.href
                                ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                                : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800",
                            )}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block py-2 px-4 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
