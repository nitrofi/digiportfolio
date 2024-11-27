import React from "react"
import configPromise from "@payload-config"
import { getPayload } from "payload"
import { Wrapper } from "@/components/ui/wrapper"
import { notFound } from "next/navigation"
import TeamMemberHero from "@/components/ui/team-member-hero"
import TeamMemberTags from "@/components/ui/team-member-tags"
import ProjectCard from "@/components/ui/project-card"

type Args = {
  params: Promise<{
    userSlug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { userSlug } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  if (!userSlug) return notFound()

  const users = await payload.find({
    collection: "users",
    where: {
      slug: {
        equals: userSlug,
      },
    },
    depth: 10,
  })

  const user = users.docs[0]

  if (!user) return notFound()

  console.log(user.projects)

  return (
    <>
      <section className="bg-dark text-white py-16">
        <Wrapper>
          <TeamMemberHero user={user} />
          <TeamMemberTags user={user} />
        </Wrapper>
      </section>
      {user.projects && (
        <section className="py-16">
          <Wrapper>
            <h2 className="font-darmaGothic uppercase text-6xl font-black">Asiakasprojektit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {user?.projects?.docs?.map((projectItem) => {
                if (typeof projectItem === "number") {
                  return null
                }
                return <ProjectCard key={projectItem.id} project={projectItem} />
              })}
            </div>
          </Wrapper>
        </section>
      )}
    </>
  )
}
