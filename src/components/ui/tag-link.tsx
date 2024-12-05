import React from "react"
import { Tag } from "@/payload-types"
import Link from "next/link"
import clsx from "clsx"

const TagLink = ({ tag, className }: { tag: Tag; className?: string }) => {
  return (
    <Link
      className={clsx("rounded-full bg-white text-black px-4 py-2", className)}
      href={`/tags/${tag.slug}`}
    >
      {tag.title}
    </Link>
  )
}

export default TagLink
