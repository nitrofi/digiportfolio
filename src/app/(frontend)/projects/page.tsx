import { Wrapper } from "@/components/ui/wrapper"
import { getPayload } from "payload"
import configPromise from "@payload-config"
import ServiceHighlight from "@/components/ui/service-highlight"
import CaseCard from "@/components/ui/project-card"

export default async function Digitiimi() {
  const payload = await getPayload({ config: configPromise })

  const projects = await payload.find({
    collection: "projects",
    depth: 2,
    draft: false,
  })

  return (
    <>
      <section className="bg-dark text-white py-16">
        <Wrapper>
          <h1 className="font-darmaGothic text-lime uppercase text-7xl font-black">Projektit</h1>
          <p className="font-bold max-w-3xl">
            Ilman ihmisiä ei olisi luovaa hybriditoimistoa. Tutustu Nitron poikkeuksellisen luovaan,
            osaavaan ja hauskaan asiantuntijoiden joukkoon.
          </p>
        </Wrapper>
      </section>
      <section className="py-16">
        <Wrapper>
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
