import Image from "next/image"
import Logo from "../../../../public/Assets/logo-light.png"
import styles from "./page.module.css"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { routes } from "./utils"
import React, { useState } from "react"
import Link from "next/link"

export const SideNav = () => {
  const [expandedStates, setExpandedStates] = useState(routes.map(() => false))

  const toggleExpansion = (categoryIndex: number) => {
    setExpandedStates((prevState) => {
      const newState = [...prevState]
      newState[categoryIndex] = !prevState[categoryIndex]
      return newState
    })
  }

  return (
    <div className={`${styles.sidebar} ${styles.main}`}>
      <div className={styles.site_logo}>
        <Image src={Logo} alt="Logo" height={170} width={170} />
      </div>
      <section className="pb-3 mt-8">
        {routes.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="text-white text-md px-4 pt-2 pb-1">
              {category.heading}
            </div>
            {category.items.map((item, index) => (
              <div key={index} className="cursor-pointer">
                <div
                  className={`p-4 py-6 flex items-center justify-between hover:bg-gray-600 hover:text-white`}
                  onClick={() =>
                    item.children.length > 0 && toggleExpansion(categoryIndex)
                  }
                >
                  <div className="flex items-center gap-6">
                    <p>{item.icon}</p>
                    <Link href={item.href}>
                      <div className={styles.routes}>{item.label}</div>
                    </Link>
                  </div>
                  {item.children.length > 0 &&
                    (expandedStates[categoryIndex] ? (
                      <BiChevronUp className="h-4 w-4" />
                    ) : (
                      <BiChevronDown className="h-4 w-4" />
                    ))}
                </div>
                {expandedStates[categoryIndex] && (
                  <div className="w-full">
                    {item.children.map((child, childIndex) => (
                      <div
                        key={childIndex}
                        className="p-2 pl-10 py-4 flex items-center hover:bg-gray-600 hover:text-white"
                      >
                        <Link href={child.href}>
                          <div className={styles.routes}>{child.label}</div>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  )
}
