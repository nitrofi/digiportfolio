import BoxLink from "@/components/ui/box-link"
import Button from "@/components/ui/button"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

import { ProjectHighlight } from "@/components/ui/project-highlight"
import { Wrapper } from "@/components/ui/wrapper"
import { FiArrowRight } from "react-icons/fi"

import design from "../../../public/Design_pixels.svg"
import insight from "../../../public/Insight_pixels.svg"
import palvelut from "../../../public/Palvelut_pixels.svg"
import tech from "../../../public/Tech_pixels.svg"
import tiimilaiset from "../../../public/Tiimilaiset_pixels.svg"
import tyokalut from "../../../public/Tyokalut_pixels.svg"
import project from "../../../public/delivery.jpg"
import { getPayload } from "payload"
import configPromise from "@payload-config"
import { getImageByTitle } from "./digitiimi/page"

export default async function Home() {
  const payload = await getPayload({ config: configPromise })

  const teams = await payload.find({
    collection: "teams",
    draft: false,
  })

  return (
    <>
      <section className="bg-dark text-white py-16">
        <Wrapper>
          <h1 className="font-darmaGothic text-lime uppercase text-7xl font-black">
            Digitiimin portfolio
          </h1>
          <p className="font-bold max-w-3xl">
            Ilman ihmisiä ei olisi luovaa hybriditoimistoa. Tutustu Nitron poikkeuksellisen luovaan,
            osaavaan ja hauskaan asiantuntijoiden joukkoon.
          </p>

          <div className="flex justify-center mt-16 gap-10">
            <BoxLink color="lime" title="Tiimiläiset" image={tiimilaiset} link="/digitiimi" />
            <BoxLink color="lime" title="Palvelut" image={palvelut} link="/palvelut" />
            <BoxLink color="lime" title="Työkalut" image={tyokalut} link="/tyokalut" />
          </div>
        </Wrapper>
      </section>
      <section className="my-16">
        <Wrapper>
          <div className="flex justify-center mt-9 gap-10">
            {teams.docs?.map((doc) => {
              return (
                <BoxLink
                  key={doc.id}
                  color="dark"
                  title={doc.title}
                  image={getImageByTitle(doc.title)}
                  link={`/digitiimi/${doc.id}`}
                />
              )
            })}
          </div>
        </Wrapper>
      </section>
      <section className="my-16">
        <Wrapper>
          <div className="flex justify-between">
            <h2 className="font-darmaGothic text-dark uppercase text-6xl font-black">
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
    </>
  )
}
