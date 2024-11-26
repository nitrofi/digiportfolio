"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiChevronRight } from "react-icons/fi"
import { Wrapper } from "./wrapper"

const Breadcrumbs = () => {
  const pathname = usePathname()

  // Skip rendering breadcrumbs on homepage
  if (pathname === "/") return null

  // Convert path to breadcrumb items
  const pathSegments = pathname.split("/").filter(Boolean)

  // Create breadcrumb items with accumulating paths
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = "/" + pathSegments.slice(0, index + 1).join("/")

    // Format segment text (replace hyphens with spaces and capitalize)
    const text = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    if (text === "Services") {
      return {
        text: "Palvelut",
        path: "/services",
      }
    }

    if (text === "Team") {
      return {
        text: "Digitiimit",
        path: "/team",
      }
    }

    if (text === "Projects") {
      return {
        text: "Projektit",
        path: "/projects",
      }
    }

    return {
      text,
      path,
    }
  })

  return (
    <div className="bg-[#2b2b2b] border border-[#1A1A1A]">
      <Wrapper>
        <nav className="py-4">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-neutral-500 hover:text-lime transition-colors">
                Etusivu
              </Link>
            </li>

            {breadcrumbs.map((item, index) => (
              <li key={item.path} className="flex items-center space-x-2">
                <FiChevronRight className="text-neutral-400" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-lime font-medium">{item.text}</span>
                ) : (
                  <Link
                    href={item.path}
                    className="text-neutral-500 hover:text-lime transition-colors"
                  >
                    {item.text}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Wrapper>
    </div>
  )
}

export default Breadcrumbs
