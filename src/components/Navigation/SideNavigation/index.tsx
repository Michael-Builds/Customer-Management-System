import Image from "next/image"
import Logo from "../../../../public/Assets/logo-light.png"
import styles from "./page.module.css"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { routes } from "./utils"
import React, { useState } from "react"
import Link from "next/link"
import Avatar from "../../../../public/Assets/avatar-8.png"

export const SideNav = () => {
  
  const [expandedRoutes, setExpandedRoutes] = useState(
    routes.flatMap((category) => category.items.map(() => false))
  )

  const toggleRouteExpansion = (routeIndex: any) => {
    setExpandedRoutes((prevState) => {
      const newState = [...prevState]
      newState[routeIndex] = !prevState[routeIndex]
      return newState
    })
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.one}>
        <Image src={Logo} alt="Logo" height={170} width={170} />
      </div>
      <div className={styles.two}>
        <section className="pb-3 w-full pt-8">
          {routes.map((category, categoryIndex) => (

            <div key={categoryIndex}>
              <div className="text-white text-md px-4 pt-2 pb-1 pt-4">
                {category.heading}
              </div>
              
              {category.items.map((item, itemIndex) => {
                const routeIndex =  categoryIndex * category.items.length + itemIndex
                const hasChildren = item.children && item.children.length > 0

                return (
                  <div key={itemIndex} className="cursor-pointer w-full">
                    <div
                      className="p-4 py-5 flex items-center w-full justify-between hover:bg-gray-600 hover:text-white"
                      onClick={() =>
                        hasChildren && toggleRouteExpansion(routeIndex)
                      }
                    >
                      <div className="flex items-center gap-6">
                        <p>{item.icon}</p>
                        <Link href={item.href}>
                          <div>{item.label}</div>
                        </Link>
                      </div>

                      {hasChildren && (
                        <div>
                          {expandedRoutes[routeIndex] ? (
                            <BiChevronUp className="h-4 w-4" />
                          ) : (
                            <BiChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      )}
                    </div>
                    {hasChildren && expandedRoutes[routeIndex] && (
                      <div className="w-full">
                        {item.children.map((child, childIndex) => (
                          <div
                            key={childIndex}
                            className="p-2 pl-10 py-4 flex items-center hover:bg-gray-600 hover:text-white"
                          >
                            <Link href={child.href}>
                              <div>{child.label}</div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </section>
      </div>
      <div className={styles.three}>
        <Image
          src={Avatar}
          alt="Logo"
          height={50}
          width={50}
          className="rounded-full"
        />
        <div className={styles.footerSection}>
          <h1>Michael Kabanda</h1>
          <p>michaelkpantramp@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
