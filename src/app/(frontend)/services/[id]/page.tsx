import React from "react"
import configPromise from "@payload-config"
import { getPayload } from "payload"
import { Wrapper } from "@/components/ui/wrapper"
import { notFound } from "next/navigation"
import ServiceSearch from "@/components/ui/service-search"
import CaseCard from "@/components/ui/case-card"

type Args = {
  params: Promise<{
    id?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { id } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  if (!id) return notFound()

  const service = await payload.findByID({
    collection: "services",
    id,
    depth: 2,
  })

  if (!service) return notFound()

  return (
    <>
      <section className="bg-dark text-white py-16">
        <Wrapper className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-darmaGothic text-lime uppercase text-7xl font-black">
              {service.title}
            </h1>
            <p className="font-bold max-w-3xl">{service.description}</p>
          </div>
          <ServiceSearch />
        </Wrapper>
      </section>

      <section className="py-16">
        <Wrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(service.cases?.docs) &&
              service.cases.docs.map((caseItem) => {
                if (typeof caseItem === "number") {
                  return null
                }
                return <CaseCard key={caseItem.id} case={caseItem} />
              })}
          </div>
        </Wrapper>
      </section>
    </>
  )
}
