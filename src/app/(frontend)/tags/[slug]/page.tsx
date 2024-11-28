import React from "react"
import configPromise from "@payload-config"
import { getPayload } from "payload"
import { notFound } from "next/navigation"
import TagHero from "@/components/ui/tag-hero"
import { Wrapper } from "@/components/ui/wrapper"
import ProjectCard from "@/components/ui/project-card"
import { Project } from "@/payload-types"
import PersonCard from "@/components/ui/person-card"
import TagCard from "@/components/ui/tag-card"

export default async function Page({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  if (!slug) return notFound()

  const tags = await payload.find({
    collection: "tags",
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 4,
  })

  const tagData = tags.docs[0]

  if (!tagData) return notFound()

  return (
    <div className="flex flex-col gap-16">
      <TagHero tagData={tagData} />
      {tagData.projects && (
        <Wrapper>
          <div className="flex flex-col gap-4">
            <h2 className="font-darmaGothic text-dark uppercase text-6xl font-black">Projektit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tagData.projects?.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </Wrapper>
      )}
      {tagData.users && (
        <div className="bg-dark py-16">
          <Wrapper>
            <div className="flex flex-col gap-4">
              <h2 className="font-darmaGothic text-white uppercase text-6xl font-black">Osaajat</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tagData.users?.docs?.map((user) => {
                  if (typeof user === "object") {
                    return <PersonCard key={user.id} user={user} whiteTile />
                  }
                })}
              </div>
            </div>
          </Wrapper>
        </div>
      )}
      {(tagData.relatedTags || tagData.linkedTags) && (
        <div className="bg-[#353535] py-16 -mt-16">
          <Wrapper>
            <div className="flex flex-col gap-4">
              <h2 className="font-darmaGothic text-white uppercase text-6xl font-black">
                Sukulaiset tagit
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tagData.relatedTags?.map((doc) => {
                  if (typeof doc === "object") {
                    return <TagCard key={doc.id} tag={doc} />
                  }
                })}
                {tagData.linkedTags?.map((doc) => {
                  if (typeof doc === "object") {
                    return <TagCard key={doc.id} tag={doc} />
                  }
                })}
              </div>
            </div>
          </Wrapper>
        </div>
      )}
    </div>
  )
}
