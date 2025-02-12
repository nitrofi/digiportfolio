import BoxLink from "@/components/ui/box-link"

import { Wrapper } from "@/components/ui/wrapper"

import palvelut from "../../../public/Palvelut_pixels.svg"
import tiimilaiset from "../../../public/Tiimilaiset_pixels.svg"
import tyokalut from "../../../public/Tyokalut_pixels.svg"
import { getPayload } from "payload"
import configPromise from "@payload-config"
import ProjectCard from "@/components/ui/project-card"

export default async function Home() {
  const payload = await getPayload({ config: configPromise })

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
            <BoxLink color="lime" title="Digitiimi" image={tiimilaiset} link="/team" />
            <BoxLink color="lime" title="Tarjoama" image={palvelut} link="/services" />
            <BoxLink color="lime" title="Tagit" image={tyokalut} link="/tags" />
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
              return <ProjectCard key={doc.id} project={doc} />
            })}
          </div>
        </Wrapper>
      </section>
    </>
  )
}
