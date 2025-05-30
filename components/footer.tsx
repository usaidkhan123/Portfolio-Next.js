"use client"

import { Mail, Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react"

export default function PortfolioFooter() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">MU</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Portfolio</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Creating beautiful functional and performant web experiences with modern technologies.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/usaidkhan123"
                className="w-8 h-8 bg-gray-200 hover:bg-purple-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-usaid-khan-0b47082ba/"
                className="w-8 h-8 bg-gray-200 hover:bg-purple-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-200 hover:bg-purple-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/usaid.__.khan5/"
                className="w-8 h-8 bg-gray-200 hover:bg-purple-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-600" />
                <a href="mailto:musiadkhan39@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                musiadkhan39@gmail.com
                </a>
              </li>
              <li className="text-gray-600">Karachi Sindh</li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-white border border-gray-200 rounded-l-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-sm flex-grow"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-2 rounded-r-md text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© {currentYear} PortFolio.X. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-gray-200 hover:bg-purple-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
