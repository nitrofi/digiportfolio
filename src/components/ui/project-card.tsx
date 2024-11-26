import React from "react"
import { Project, Media } from "@/payload-types"
import Image from "next/image"
import Link from "next/link"

const ProjectCard = ({ project: projectItem }: { project: Project }) => {
  if (typeof projectItem.customer === "number") {
    return null
  }

  return (
    <Link href={`/projects/${projectItem.slug}`} className="flex flex-col gap-3">
      {projectItem.image && (
        <div className="aspect-[3/2] relative bg-gray-100">
          <Image
            src={(projectItem.image as Media).sizes?.small?.url || ""}
            alt={projectItem.title || ""}
            className="object-cover"
            fill
          />
        </div>
      )}
      <h3 className="font-darmaGothic text-[#222222] uppercase text-4xl font-black">
        {projectItem.title}
      </h3>
      <p className="font-bold">{projectItem.customer?.name}</p>
      <p>{projectItem.startedAt ? new Date(projectItem.startedAt).toLocaleDateString() : ""}</p>
      <div className="flex gap-2 flex-wrap">
        <div className="bg-lime py-2 px-5 rounded-full">
          Kompleksisuus {projectItem.complexity || "1"}
        </div>
        <div className="bg-blue-600 py-2 px-5 rounded-full text-white">
          Laajuus {projectItem.wideness || "1"}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
