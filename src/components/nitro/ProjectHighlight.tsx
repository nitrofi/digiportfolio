import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Button from './Button'

type Props = {
  image: StaticImageData
  title: string
  customer: string
  startedAt: string
}

export const ProjectHighlight = (props: Props) => {
  return (
    <article className="flex flex-col gap-3">
      <Image src={props.image} alt={props.title} />
      <h3 className="font-darmaGothic text-[#222222] uppercase text-4xl font-black">
        {props.title}
      </h3>
      <p className="font-bold">{props.customer}</p>
      <p>{props.startedAt}</p>
      <div className="flex gap-2 flex-wrap">
        <Button className="bg-[#e6e6e6] py-2 px-5">Laajuus 1</Button>
        <Button className="bg-[#e6e6e6] py-2 px-5">Kompleksisuus 1</Button>
        <Button className="bg-[#e6e6e6] py-2 px-5">Mobiili app</Button>
      </div>
    </article>
  )
}
