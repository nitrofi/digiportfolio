import BoxLink from "@/components/ui/box-link"
import Button from "@/components/ui/button"

import { ProjectHighlight } from "@/components/ui/project-highlight"
import { Wrapper } from "@/components/ui/wrapper"
import { FiArrowRight } from "react-icons/fi"

import palvelut from "../../../public/Palvelut_pixels.svg"
import tiimilaiset from "../../../public/Tiimilaiset_pixels.svg"
import tyokalut from "../../../public/Tyokalut_pixels.svg"
import project from "../../../public/delivery.jpg"
import { getPayload } from "payload"
import configPromise from "@payload-config"
import { getImageByTitle } from "./team/page"
import CaseCard from "@/components/ui/project-card"

export default async function Home() {
  const payload = await getPayload({ config: configPromise })

  const teams = await payload.find({
    collection: "teams",
    draft: false,
  })

  const projects = await payload.find({
    collection: "projects",
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
          <div className="flex justify-center mt-16 gap-10 max-md:flex-col">
            <BoxLink color="lime" title="Digitiimit" image={tiimilaiset} link="/team" />
            <BoxLink color="lime" title="Palvelut" image={palvelut} link="/services" />
            <BoxLink color="lime" title="Työkalut" image={tyokalut} link="/tools" />
          </div>
        </Wrapper>
      </section>
      <section className="my-16">
        <Wrapper>
          <h2 className="font-darmaGothic text-dark uppercase text-6xl font-black mb-4">
            Digitiimit
          </h2>
          <div className="flex justify-center gap-10 max-md:flex-col">
            {teams.docs?.map((doc) => {
              return (
                <BoxLink
                  key={doc.id}
                  color="dark"
                  title={doc.title}
                  image={getImageByTitle(doc.title)}
                  link={`/team/${doc.slug}`}
                />
              )
            })}
          </div>
        </Wrapper>
      </section>
      <section className="my-16">
        <Wrapper>
          <h2 className="font-darmaGothic text-dark uppercase text-6xl font-black mb-4">
            Tutustu töihimme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.docs?.map((doc) => {
              return <CaseCard key={doc.id} project={doc} />
            })}
          </div>
        </Wrapper>
      </section>
    </>
  )
}
