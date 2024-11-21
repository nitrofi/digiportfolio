import React from "react"
import Link from "next/link"
import { MdOutlineDiamond } from "react-icons/md"

type Props = {
  title?: string
  cases?: Array<{
    title: string
    id: string
  }>
}

const ServiceHighlight = ({ title = "DIGITAALINEN TOIMINNALLINEN PALVELU", cases = [] }: Props) => {
  return (
    <div className="relative bg-lime p-8 min-h-[400px] flex flex-col justify-between">
      {/* Timantti-ikoni */}
      <div className="mb-6">
        <MdOutlineDiamond className="w-12 h-12 text-black" />
      </div>

      {/* Otsikko */}
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-black leading-tight">{title}</h2>

        {/* Case-linkit */}
        <div className="flex flex-wrap gap-4">
          {cases.map((caseItem, index) => (
            <Link
              key={index}
              href={`/case/${caseItem.id}`}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              case
            </Link>
          ))}
        </div>
      </div>

      {/* Nuoli-ikoni oikeassa alakulmassa */}
      <div className="absolute bottom-8 right-8">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <span className="text-2xl">→</span>
        </div>
      </div>
    </div>
  )
}

export default ServiceHighlight
