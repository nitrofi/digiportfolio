import React from "react"
import configPromise from "@payload-config"
import { getPayload } from "payload"
import { notFound } from "next/navigation"
import ProjectHero from "@/components/ui/project-hero"
import { Wrapper } from "@/components/ui/wrapper"
import ProjectCard from "@/components/ui/project-card"
import { Project, User } from "@/payload-types"
import PersonCard from "@/components/ui/person-card"

export default async function Page({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  if (!slug) return notFound()

  const projects = await payload.find({
    collection: "projects",
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 3,
  })

  const projectData = projects.docs[0]

  if (
    !projectData ||
    typeof projectData?.customer !== "object" ||
    typeof projectData?.customer?.projects !== "object"
  )
    return notFound()

  const customerHasOtherProjects =
    projectData?.customer?.projects?.docs &&
    projectData.customer.projects.docs.length > 1 &&
    projectData?.id !==
      projectData?.customer?.projects?.docs?.find((doc: Project) => doc.id !== projectData.id)

  return (
    <>
      <ProjectHero projectData={projectData} />

      <section className="py-16 bg-dark">
        <Wrapper className="flex flex-col gap-4">
          <h2 className="font-darmaGothic text-lime uppercase text-6xl font-black">
            Mukana tiimissä
          </h2>
          <div className="grid grid-cols-3 gap-10">
            {projectData.users?.map((member: User) => (
              <PersonCard key={member.id} user={member} whiteTile />
            ))}
          </div>
        </Wrapper>
      </section>

      {/* TODO: Extract this to a UI component */}
      {customerHasOtherProjects && (
        <section className="my-16">
          <Wrapper>
            <h2 className="font-darmaGothic text-dark uppercase text-6xl font-black mb-4">
              Muut asiakkaan {projectData.customer.name} projektit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectData?.customer?.projects?.docs
                ?.filter((doc: Project) => doc.id !== projectData.id)
                .map((doc: Project) => {
                  return <ProjectCard key={doc.id} project={doc} />
                })}
            </div>
          </Wrapper>
        </section>
      )}
    </>
  )
}
