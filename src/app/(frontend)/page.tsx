import BoxLink from "@/components/nitro/BoxLink"
import Button from "@/components/nitro/Button"
import Footer from "@/components/nitro/Footer"
import Header from "@/components/nitro/Header"

import { ProjectHighlight } from "@/components/nitro/ProjectHighlight"
import { Wrapper } from "@/components/nitro/Wrapper"
import { FiArrowRight } from "react-icons/fi"

import design from "../../../public/Design_pixels.svg"
import insight from "../../../public/Insight_pixels.svg"
import palvelut from "../../../public/Palvelut_pixels.svg"
import tech from "../../../public/Tech_pixels.svg"
import tiimilaiset from "../../../public/Tiimilaiset_pixels.svg"
import tyokalut from "../../../public/Tyokalut_pixels.svg"
import project from "../../../public/delivery.jpg"

export default async function Home() {
  return (
    <main>
      <Header />
      <section className="bg-[#292929] text-white py-16">
        <Wrapper>
          <h1 className="font-darmaGothic text-lime uppercase text-7xl font-black">
            Digitiimin portfolio
          </h1>
          <p className="font-bold max-w-3xl">
            Ilman ihmisiä ei olisi luovaa hybriditoimistoa. Tutustu Nitron poikkeuksellisen luovaan,
            osaavaan ja hauskaan asiantuntijoiden joukkoon.
          </p>

          <div className="flex justify-center mt-16 gap-10">
            <BoxLink color="lime" title="Tiimiläiset" image={tiimilaiset} link="/team" />
            <BoxLink color="lime" title="Palvelut" image={palvelut} link="/team" />
            <BoxLink color="lime" title="Työkalut" image={tyokalut} link="/team" />
          </div>
        </Wrapper>
      </section>
      <section className="my-16">
        <Wrapper>
          <h2 className="font-darmaGothic text-[#222222] uppercase text-6xl font-black">
            Digitiimi
          </h2>
          <div className="flex justify-center mt-9 gap-10">
            <BoxLink color="dark" title="Tech" image={tech} link="/team" />
            <BoxLink color="dark" title="Insight" image={insight} link="/team" />
            <BoxLink color="dark" title="Design" image={design} link="/team" />
          </div>
        </Wrapper>
      </section>
      <section className="my-16">
        <Wrapper>
          <div className="flex justify-between">
            <h2 className="font-darmaGothic text-[#222222] uppercase text-6xl font-black">
              Tutustu töihimme
            </h2>
            <Button className="flex items-center gap-3 bg-lime">
              Katso kaikki työt <FiArrowRight />
            </Button>
          </div>
          <div className="grid grid-cols-3 mt-9 gap-10">
            <ProjectHighlight
              image={project}
              title="Brändi ja strategia"
              customer="Lumme Energia"
              startedAt="02/2024"
            />
            <ProjectHighlight
              image={project}
              title="Mobiili appin suunnittelu"
              customer="Lumme Energia"
              startedAt="02/2024"
            />
            <ProjectHighlight
              image={project}
              title="Verkkosivu uudistus"
              customer="Lumme Energia"
              startedAt="02/2024"
            />
            <ProjectHighlight
              image={project}
              title="Käyttäjäpolkujen päivitys"
              customer="Lumme Energia"
              startedAt="02/2024"
            />
          </div>
        </Wrapper>
      </section>
      <Footer />
    </main>
  )
}
