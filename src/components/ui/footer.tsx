import React from "react"
import { Wrapper } from "./wrapper"
import { FiArrowRight } from "react-icons/fi"
import Image from "next/image"

import logo from "../../../public/nitro-logo.svg"

const Footer = () => {
  return (
    <footer className="bg-lime py-20">
      <Wrapper className="flex items-start gap-28 max-lg:flex-col">
        <Image src={logo} alt="project" />
        <div className="grid grid-cols-2 gap-14 max-lg:grid-cols-1 w-full">
          <nav>
            <span className="font-bold border-b-2 border-b-black pb-4 mb-8 flex justify-between items-center">
              Oikopolut <FiArrowRight className="text-xl" />
            </span>
            <ul className="underline space-y-2">
              <li>Headless NB slidupohjat (sharepoint)</li>
            </ul>
          </nav>
          <nav>
            <span className="font-bold border-b-2 border-b-black pb-4 mb-8 flex justify-between items-center">
              Lue lisää Nitron matkapäiväkirjasta
              <FiArrowRight className="text-xl" />
            </span>
            <ul className="underline space-y-2">
              <li>Miksi valita headless CMS?</li>
              <li>Mikä on Design System ja mihin sitä tarvitaan?</li>
              <li>Optimoitko somesisältöäsi?</li>
            </ul>
          </nav>
          <nav>
            <span className="font-bold border-b-2 border-b-black pb-4 mb-8 flex justify-between items-center">
              Referenssit Nitro.fi
              <FiArrowRight className="text-xl" />
            </span>
          </nav>
          <nav>
            <span className="font-bold border-b-2 border-b-black pb-4 mb-8 flex justify-between items-center">
              Tähän vielä joku ohjaus?
              <FiArrowRight className="text-xl" />
            </span>
          </nav>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
