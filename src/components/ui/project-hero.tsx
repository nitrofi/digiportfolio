import { Project, Media, Tag } from "@/payload-types"
import React from "react"
import RichText from "../payload-default/RichText"
import Image from "next/image"
import { Wrapper } from "./wrapper"
import Link from "next/link"

const ProjectHero = ({ projectData }: { projectData: Project }) => {
  return (
    <>
      <div className="w-full h-[400px] relative bg-dark">
        {projectData.image && (
          <Image
            className="object-cover"
            src={(projectData.image as Media).url ?? ""}
            alt={projectData.title ?? ""}
            fill
            priority
          />
        )}
      </div>
      <Wrapper className="flex flex-row gap-8 py-16">
        <div className="flex flex-col gap-4 w-3/5 max-md:w-full">
          <h1 className="font-darmaGothic text-dark uppercase text-7xl font-black">
            {projectData.title}
          </h1>
          {projectData.customer && typeof projectData.customer === "object" && (
            <p className="text-blue-600 font-bold">{projectData.customer.name}</p>
          )}
          {projectData.startedAt && (
            <p className="text-neutral-400">
              Aloitettu {new Date(projectData.startedAt).toLocaleDateString()}
            </p>
          )}
          {projectData.introduction && (
            <RichText content={projectData.introduction} enableGutter={false} enableProse={false} />
          )}
          {projectData.customer &&
            typeof projectData.customer === "object" &&
            projectData.customer.website && (
              <Link className="text-blue-600 underline" href={projectData.customer.website}>
                {projectData.customer.website}
              </Link>
            )}
        </div>
        <div className="flex flex-col gap-2 w-2/5">
          {projectData.keypoints && (
            <RichText
              className="flex flex-col gap-2"
              content={projectData.keypoints}
              enableGutter={false}
              enableProse={false}
            />
          )}
          <div className="flex gap-2 flex-wrap">
            {projectData.complexity && (
              <div className="bg-lime py-2 px-5 rounded-full">
                Kompleksisuus {projectData.complexity || "1"}
              </div>
            )}
            {projectData.wideness && (
              <div className="bg-blue-600 py-2 px-5 rounded-full text-white">
                Laajuus {projectData.wideness || "1"}
              </div>
            )}
            {projectData.isPublic && (
              <div className="bg-green-600 py-2 px-5 rounded-full text-white">Julkinen refe</div>
            )}
            {!projectData.isPublic && (
              <div className="bg-red-600 py-2 px-5 rounded-full text-white">Ei julkinen refe</div>
            )}
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <h2 className="font-darmaGothic text-dark uppercase text-6xl font-black">
            Näin tämä tehtiin
          </h2>
          <div className="grid grid-cols-3 gap-4 my-4 max-md:grid-cols-1">
            {projectData.tags?.docs &&
              Object.entries(
                projectData.tags.docs.reduce((groups: { [key: string]: Tag[] }, tag: Tag) => {
                  const teamTitle =
                    typeof tag.teams === "object" && tag.teams?.title ? tag.teams.title : "Muut"

                  if (!groups[teamTitle]) {
                    groups[teamTitle] = []
                  }
                  groups[teamTitle].push(tag)
                  return groups
                }, {}),
              ).map(([teamTitle, tags]) => (
                <div key={teamTitle} className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{teamTitle}</h3>
                  <div className="flex gap-2 flex-wrap">
                    {tags.map((tag: Tag) => (
                      <div className="bg-lime py-2 px-5 rounded-full" key={tag.id}>
                        {tag.title}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default ProjectHero
