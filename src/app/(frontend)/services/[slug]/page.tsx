import React from "react"
import configPromise from "@payload-config"
import { getPayload } from "payload"
import { Wrapper } from "@/components/ui/wrapper"
import { notFound } from "next/navigation"
import ServiceSearch from "@/components/ui/service-search"
import ProjectCard from "@/components/ui/project-card"

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  if (!slug) return notFound()

  const services = await payload.find({
    collection: "services",
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
  })

  const service = services.docs[0]

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
            {Array.isArray(service.projects?.docs) &&
              service.projects.docs.map((projectItem) => {
                if (typeof projectItem === "number") {
                  return null
                }
                return <ProjectCard key={projectItem.id} project={projectItem} />
              })}
          </div>
        </Wrapper>
      </section>
    </>
  )
}
