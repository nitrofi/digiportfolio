import React from "react"
import { Wrapper } from "./Wrapper"
import Image from "next/image"
import logo from "../../../public/Digiportfolio_logo.svg"
import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-[#222222] py-6 text-white">
      <Wrapper>
        <div className="flex justify-between items-center font-rigid">
          <Link href="/">
            <Image src={logo} alt="Digitiimin portfolio" />
          </Link>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/digitiimi">Digitiimi</Link>
              </li>
              <li>
                <Link href="/tuotteet">Tuotteet / Palvelut</Link>
              </li>
              <li>
                <Link href="/tyokalut">Työkalut</Link>
              </li>
              <li>
                <Link href="/caset">Caset</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
