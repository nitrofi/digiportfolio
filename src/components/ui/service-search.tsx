"use client"
import React from "react"
import { FiSearch } from "react-icons/fi"

const ServiceSearch = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Etsi palvelua"
            className="w-full py-3 px-4 pr-12 rounded-lg bg-white text-dark"
          />
          <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
        </div>
        <select className="py-3 px-4 rounded-lg bg-white text-dark">
          <option value="">Kompleksisuus</option>
          <option value="low">Matala</option>
          <option value="medium">Keskitaso</option>
          <option value="high">Korkea</option>
        </select>
        <select className="py-3 px-4 rounded-lg bg-white text-dark">
          <option value="">Laajuus</option>
          <option value="low">Pieni</option>
          <option value="medium">Keskikokoinen</option>
          <option value="high">Laaja</option>
        </select>
        <button className="py-3 px-4 rounded-lg bg-white text-dark">Järjestä</button>
      </div>
      <div className="flex gap-2 flex-wrap">
        {["Kaikki", "Dato CMS", "NextJS", "Mobiili app", "Leadoo", "Animaatiot", "Squarespace"].map(
          (tag) => (
            <button
              key={tag}
              className="py-2 px-4 rounded-full bg-lime hover:bg-lime/80 transition-colors"
            >
              {tag}
            </button>
          ),
        )}
      </div>
    </div>
  )
}

export default ServiceSearch
