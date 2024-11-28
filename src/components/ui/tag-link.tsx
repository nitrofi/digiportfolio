import React from "react"
import { Tag } from "@/payload-types"
import Link from "next/link"

const TagLink = ({ tag }: { tag: Tag }) => {
  return (
    <Link className="rounded-full bg-white text-black px-4 py-2" href={`/tags/${tag.slug}`}>
      {tag.title}
    </Link>
  )
}

export default TagLink
