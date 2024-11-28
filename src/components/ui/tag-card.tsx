import React from "react"
import Link from "next/link"
import { MdOutlineDiamond } from "react-icons/md"
import { Tag } from "@/payload-types"

const TagCard = ({ tag }: { tag: Tag }) => {
  return (
    <div className="relative bg-lime p-8 min-h-[400px] flex flex-col justify-between gap-2">
      <MdOutlineDiamond className="w-12 h-12 text-black" />
      <h2 className="text-4xl font-bold text-black leading-tight">{tag.title}</h2>
      <p>{tag.description}</p>
      <Link href={`/tags/${tag.slug}`} className="ml-auto">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <span className="text-2xl text-dark">→</span>
        </div>
      </Link>
    </div>
  )
}

export default TagCard
