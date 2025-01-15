"use client"

import React, { useState } from "react"
import { Wrapper } from "./wrapper"
import Image from "next/image"
import logo from "../../../public/Digiportfolio_logo.svg"
import Link from "next/link"
import { FiMenu, FiX } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <header className="bg-[#222222] py-6 text-white z-50 sticky top-0">
      <Wrapper>
        <div className="flex justify-between items-center font-rigid">
          <Link href="/" className="flex items-center gap-2 w-52">
            <Image src={logo} alt="Digitiimin portfolio" className="w-auto h-8 md:h-auto" />
          </Link>

          {/* Hamburger menu button */}
          <button
            className="md:hidden p-2 hover:opacity-80 transition-opacity"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <Link href="/team" className="hover:text-lime transition-colors">
                  Digitiimit
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-lime transition-colors">
                  Tarjoama
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-lime transition-colors">
                  Projektit
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                style={{ position: "absolute", top: "100%", left: 0, right: 0 }}
                className="bg-[#1a1a1a] backdrop-blur-sm border-t border-lime/10 shadow-xl md:hidden overflow-hidden"
              >
                <div className="border-b border-lime/10">
                  <ul className="flex flex-col py-4">
                    <li>
                      <Link
                        href="/team"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-3 px-6 hover:bg-lime/10 transition-colors hover:text-lime"
                      >
                        Digitiimi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-3 px-6 hover:bg-lime/10 transition-colors hover:text-lime"
                      >
                        Tarjoama
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projects"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-3 px-6 hover:bg-lime/10 transition-colors hover:text-lime"
                      >
                        Projektit
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
