import { useState, useMemo, useCallback } from "react"
import Image from "next/image"
import Logo from "../../../../public/Assets/logo-light.png"
import styles from "./page.module.css"
import { motion, AnimatePresence } from "framer-motion"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { routes } from "./utils"

const NavLink = dynamic(() => import("next/link"), { ssr: false })

const textAnimation = {
  hidden: { padding: 0, opacity: 0, transition: { duration: 0.1 } },
  show: { padding: 0, opacity: 1, transition: { duration: 0.5 } },
}

export const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [expandedRoutes, setExpandedRoutes] = useState<boolean[]>([])
  const router = useRouter()

  const isNavLinkActive = useCallback(
    (href: any) => router.pathname === href,
    [router.pathname]
  )

  const toggleRouteExpansion = useCallback((index: number) => {
    setExpandedRoutes((prevExpandedRoutes) => {
      const newExpandedRoutes: boolean[] = [...prevExpandedRoutes]
      newExpandedRoutes[index] = !prevExpandedRoutes[index]
      return newExpandedRoutes
    })
  }, [])

  const routesWithMemo = useMemo(
    () =>
      routes.map((route, index) => (
        <div
          key={index}
          className={`${expandedRoutes[index] && "shadow-sm bg-opacity-30"} `}
        >
          <div
            title={!isOpen ? route.label?.toLowerCase() : ""}
            onClick={() => toggleRouteExpansion(index)}
            className={`p-3 py-7 flex justify-between whitespace-nowrap items-center ease-in duration-100 hover:ease-in-out hover:bg-gray-600 hover:text-white h-2 cursor-pointer ${styles.navLink}`}
          >
            <div className="flex gap-4 items-center">
              <div className="flex text-lg">{route.icon}</div>
              <motion.div
                variants={textAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex whitespace-nowrap capitalize text-sm font-public"
              >
                {isOpen && route.label}
              </motion.div>
            </div>

            {route.children.length > 0 && (
              <>
                {expandedRoutes[index] ? (
                  <BiChevronUp className="text-xl" />
                ) : (
                  <BiChevronDown className="text-xl" />
                )}
              </>
            )}
          </div>
          {expandedRoutes[index] && (
            <ul className="">
              <AnimatePresence>
                {route.children.map((child, childIndex) => (
                  <li key={childIndex}>
                    <NavLink
                      href={child.href}
                      className={`p-4 pl-6 py-6 list-disc flex justify-between font-public whitespace-nowrap items-center ease-in duration-150 hover:ease-in hover:bg-gray-600 hover:text-white h-6 ${
                        isNavLinkActive(child.href)
                          ? "bg-gray-600 text-white"
                          : ""
                      } ${styles.navLink}`}
                      title={!isOpen ? child.label?.toLowerCase() : ""}
                    >
                      <div className="flex gap-4 items-center">
                        <div className="flex text-md">{child.icons}</div>
                        <motion.div
                          variants={textAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="flex whitespace-nowrap capitalize text-xs font-public"
                        >
                          {isOpen && child.label}
                        </motion.div>
                      </div>
                    </NavLink>
                  </li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </div>
      )),
    [expandedRoutes, isNavLinkActive, isOpen, toggleRouteExpansion]
  )

  return (
    <div className={`${styles.sidebar} ${styles.main}`}>
      <div className={styles.site_logo}>
        <Image src={Logo} alt="Logo" height={170} width={170} />
      </div>
      <section className="pb-3">
        <motion.div className={styles.sidebar}>
          <section className="mt-8 pb-3">{routesWithMemo}</section>
        </motion.div>
      </section>
    </div>
  )
}
