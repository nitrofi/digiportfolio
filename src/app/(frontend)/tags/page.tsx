import { Wrapper } from "@/components/ui/wrapper"
import { getPayload } from "payload"
import configPromise from "@payload-config"
import TagCard from "@/components/ui/tag-card"

export default async function Tags() {
  const payload = await getPayload({ config: configPromise })

  const tags = await payload.find({
    collection: "tags",
    depth: 2,
    draft: false,
  })

  return (
    <>
      <section className="bg-dark text-white py-16">
        <Wrapper>
          <h1 className="font-darmaGothic text-lime uppercase text-7xl font-black">Tagit</h1>
          <p className="font-bold max-w-3xl">
            Ilman ihmisiä ei olisi luovaa hybriditoimistoa. Tutustu Nitron poikkeuksellisen luovaan,
            osaavaan ja hauskaan asiantuntijoiden joukkoon.
          </p>
        </Wrapper>
      </section>
      <section className="py-16">
        <Wrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tags.docs?.map((doc) => {
              return <TagCard key={doc.id} tag={doc} />
            })}
          </div>
        </Wrapper>
      </section>
    </>
  )
}
