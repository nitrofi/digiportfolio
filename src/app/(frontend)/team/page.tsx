import BoxLink from "@/components/ui/box-link"

import { Wrapper } from "@/components/ui/wrapper"

import design from "../../../../public/Design_pixels.svg"
import insight from "../../../../public/Insight_pixels.svg"
import tech from "../../../../public/Tech_pixels.svg"
import { getPayload } from "payload"
import configPromise from "@payload-config"

export function getImageByTitle(title: string) {
  if (title === "Tech") return tech
  if (title === "Insight") return insight
  if (title === "Design") return design
}

export default async function Digitiimi() {
  const payload = await getPayload({ config: configPromise })

  const teams = await payload.find({
    collection: "teams",
    draft: false,
  })

  return (
    <>
      <section className="bg-dark text-white py-16">
        <Wrapper>
          <h1 className="font-darmaGothic text-lime uppercase text-7xl font-black">Digitiimit</h1>
          <p className="font-bold max-w-3xl">
            Ilman ihmisiä ei olisi luovaa hybriditoimistoa. Tutustu Nitron poikkeuksellisen luovaan,
            osaavaan ja hauskaan asiantuntijoiden joukkoon.
          </p>
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
                  link={`/team/${doc.slug}`}
                />
              )
            })}
          </div>
        </Wrapper>
      </section>
    </>
  )
}
