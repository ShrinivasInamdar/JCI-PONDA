import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About JCI Ponda</h3>
            <p className="text-white/90 text-sm">
              Junior Chamber International (JCI) Ponda is a nonprofit organization of young active citizens who are
              engaged and committed to creating impact in their communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/90 hover:text-white hover:underline text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/90 hover:text-white hover:underline text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/90 hover:text-white hover:underline text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-white hover:underline text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-white" />
                <span className="text-white/90">info@jciponda.org</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-white" />
                <span className="text-white/90">Ponda, Goa, India</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white/90 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white/90 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-center text-sm text-white/90">JCI Ponda 2025 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

