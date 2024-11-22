import React from "react"
import Link from "next/link"
import { MdOutlineDiamond } from "react-icons/md"
import { Service, Tag } from "@/payload-types"

const ServiceHighlight = ({ service }: { service: Service }) => {
  return (
    <div className="relative bg-lime p-8 min-h-[400px] flex flex-col justify-between">
      <div className="mb-6">
        <MdOutlineDiamond className="w-12 h-12 text-black" />
      </div>

      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-black leading-tight">{service.title}</h2>

        <div className="flex flex-wrap gap-4">
          {Array.isArray(service.tags?.docs) &&
            service.tags.docs.map((tagItem: Tag, index) => (
              <Link
                key={index}
                href={`/tagit/${tagItem.id}`}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                {tagItem.title}
              </Link>
            ))}
        </div>
      </div>

      <Link href={`/services/${service.id}`} className="ml-auto">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <span className="text-2xl">→</span>
        </div>
      </Link>
    </div>
  )
}

export default ServiceHighlight
