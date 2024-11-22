import { Wrapper } from "@/components/ui/wrapper"
import design from "../../../../public/Design_pixels.svg"
import insight from "../../../../public/Insight_pixels.svg"
import tech from "../../../../public/Tech_pixels.svg"
import { getPayload } from "payload"
import configPromise from "@payload-config"
import ServiceHighlight from "@/components/ui/service-highlight"
import { Case, Tag } from "@/payload-types"

export function getImageByTitle(title: string) {
  if (title === "Tech") return tech
  if (title === "Insight") return insight
  if (title === "Design") return design
}

export default async function Digitiimi() {
  const payload = await getPayload({ config: configPromise })

  const services = await payload.find({
    collection: "services",
    depth: 2,
    draft: false,
  })

  console.log(services.docs[3].tags)

  return (
    <>
      <section className="bg-dark text-white py-16">
        <Wrapper>
          <h1 className="font-darmaGothic text-lime uppercase text-7xl font-black">
            Tuotteet/Palvelut
          </h1>
          <p className="font-bold max-w-3xl">
            Ilman ihmisiä ei olisi luovaa hybriditoimistoa. Tutustu Nitron poikkeuksellisen luovaan,
            osaavaan ja hauskaan asiantuntijoiden joukkoon.
          </p>
        </Wrapper>
      </section>
      <section className="py-16 bg-dark">
        <Wrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.docs?.map((doc) => {
              return <ServiceHighlight key={doc.id} title={doc.title || ""} tags={doc.tags} />
            })}
          </div>
        </Wrapper>
      </section>
    </>
  )
}