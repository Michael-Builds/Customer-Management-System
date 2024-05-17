import { useState } from "react"
import Image from "next/image"
import Logo from "../../../../public/Assets/logo-light.png"
import styles from "./page.module.css"
import { motion, AnimatePresence } from "framer-motion"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { MdOutlineForum } from "react-icons/md"
import dynamic from "next/dynamic"
import { BsGrid1X2 } from "react-icons/bs"
import { BsCart3 } from "react-icons/bs"
import { SiGoogleanalytics } from "react-icons/si"
import { HiMiniCog6Tooth } from "react-icons/hi2"
import { BiSupport } from "react-icons/bi"
import { FaLuggageCart } from "react-icons/fa"
import { PiUsersThreeFill } from "react-icons/pi"
import { BsFillMegaphoneFill } from "react-icons/bs"
import { AiOutlineFileText } from "react-icons/ai"
import { FaQuestion } from "react-icons/fa6"
import { useRouter } from "next/router"

const NavLink = dynamic(() => import("next/link"))

const routes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <BsGrid1X2 size="1rem" stroke={`${1.5}`} />,
    children: [],
  },
  {
    label: "Products",
    href: "#",
    icon: <BsCart3 size="1rem" stroke={`${1.5}`} />,
    children: [
      { icons: "", label: "Add Products", href: "/products/add" },
      { icons: "", label: "Manage Products", href: "/products/manage" },
      { icons: "", label: "Product Categories", href: "/productCategories" },
    ],
  },
  {
    label: "Orders",
    href: "#calendar",
    icon: <FaLuggageCart size="1.1rem" stroke={`${1.5}`} />,
    children: [
      { icons: "", label: "View All Orders", href: "#required-for-focus" },
      { icons: "", label: "Process Orders", href: "#required-for-focus" },
      { icons: "", label: "Manage Shipping", href: "#required-for-focus" },
    ],
  },
  {
    label: "Customers",
    href: "#",
    icon: <PiUsersThreeFill size="1.2rem" stroke={`${1.5}`} />,
    children: [
      { icons: "", label: "View All Customers", href: "#required-for-focus" },
      { icons: "", label: "Customer Details", href: "#required-for-focus" },
      { icons: "", label: "Customer Support", href: "#required-for-focus" },
    ],
  },
  {
    label: "Marketing",
    href: "#calendar",
    icon: <BsFillMegaphoneFill size="1rem" stroke={`${1.5}`} />,
    children: [
      {
        icons: "",
        label: "Create Discount Codes",
        href: "#required-for-focus",
      },
      { icons: "", label: "Manage Promotions", href: "#required-for-focus" },
      { icons: "", label: "Email Campaigns", href: "#required-for-focus" },
    ],
  },
  {
    label: "Content Management",
    href: "#calendar",
    icon: <AiOutlineFileText size="1.1rem" stroke={`${1.5}`} />,
    children: [
      { icons: "", label: "Pages", href: "#required-for-focus" },
      { icons: "", label: "Blog Posts", href: "#required-for-focus" },
      { icons: "", label: "Multimedia", href: "#required-for-focus" },
    ],
  },
  {
    label: "Analytics",
    href: "#",
    icon: <SiGoogleanalytics size="1rem" stroke={`${1.5}`} />,
    children: [
      { icons: "", label: "View Site Traffic", href: "#required-for-focus" },
      { icons: "", label: "Conversion Rates", href: "#required-for-focus" },
      { icons: "", label: "Customer Behavior", href: "#required-for-focus" },
    ],
  },
  {
    label: "Settings",
    href: "#calendar",
    icon: <HiMiniCog6Tooth size="1rem" stroke={`${1.5}`} />,
    children: [
      { icons: "", label: "General Settings", href: "#required-for-focus" },
      { icons: "", label: "Payment Options ", href: "#required-for-focus" },
      { icons: "", label: "Shipping Settings", href: "#required-for-focus" },
    ],
  },
  {
    label: "Help & Support",
    href: "#pages",
    icon: <BiSupport size="1rem" stroke={`${1.5}`} />,
    children: [
      {
        icons: <FaQuestion size="0.9rem" />,
        label: "FAQs & Knowledge Base",
        href: "#required-for-focus",
      },
      {
        icons: <MdOutlineForum size="0.9rem" />,
        label: "Community Forums ",
        href: "#required-for-focus",
      },
      { icons: "", label: "Contact Support", href: "#required-for-focus" },
    ],
  },
]

type ExpandedRoutes = Record<string, boolean>

const initialExpandedRoutes: ExpandedRoutes = routes.reduce((acc, route) => {
  acc[route.label] = false
  return acc
}, {} as ExpandedRoutes)

export const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true)

  const [expandedRoutes, setExpandedRoutes] = useState<ExpandedRoutes>(
    initialExpandedRoutes
  )

  const textAnimation = {
    hidden: { padding: 0, opacity: 0, transition: { duration: 0.1 } },
    show: { padding: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const toggleRouteExpansion = (routeName: string) => {
    setExpandedRoutes((prevExpandedRoutes) => {
      const newExpandedRoutes = { ...prevExpandedRoutes }

      // Close all previously opened routes
      Object.keys(newExpandedRoutes).forEach((key) => {
        if (key !== routeName) {
          newExpandedRoutes[key] = false
        }
      })

      // Toggle the expansion state of the current route
      newExpandedRoutes[routeName] = !prevExpandedRoutes[routeName]
      return newExpandedRoutes
    })
  }

  const router = useRouter()

  const isNavLinkActive = (href: string) => {
    return router.pathname === href
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.site_logo}>
        <Image src={Logo} alt="Logo" priority height={28} width={28} />
      </div>
      <section className="mt-10 pb-3 ">
        <motion.div
          className={styles.sidebar}
          // initial={{ x: -280 }}
          // animate={{ x: isOpen ? 0 : -280 }}
          // transition={{ type: "tween", duration: 0.1 }}
        >
          <section className="mt-8 pb-3">
            {routes.map((route, index) =>
              route.children.length > 0 ? (
                <div
                  key={index}
                  className={`${
                    expandedRoutes[route.label] && "shadow-sm bg-opacity-30 "
                  }`}
                >
                  <div
                    title={
                      !isOpen
                        ? route.label
                          ? route.label.toLowerCase()
                          : ""
                        : ""
                    }
                    onClick={() => toggleRouteExpansion(route.label)}
                    className={`p-5 py-7 flex justify-between whitespace-nowrap items-center ease-in duration-100 hover:ease-in-out hover:bg-gray-600 hover:text-white h-2 cursor-pointer`}
                  >
                    <div className="flex gap-4 items-center ">
                      <div className="flex text-lg">{route.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={textAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="flex whitespace-nowrap capitalize text-sm font-public"
                          >
                            {route.label}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {expandedRoutes[route.label] ? (
                      <BiChevronUp className="text-xl" />
                    ) : (
                      <BiChevronDown className="text-xl" />
                    )}
                  </div>
                  {expandedRoutes[route.label] && (
                    <ul className="">
                      {route.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <NavLink
                            href={child.href}
                            className={`p-4 pl-6 py-6 list-disc flex justify-between font-public whitespace-nowrap items-center ease-in duration-150 hover:ease-in hover:bg-gray-600  hover:text-white h-6 ${
                              isNavLinkActive(child.href)
                                ? "bg-gray-600 text-white"
                                : ""
                            }`}
                            title={
                              !isOpen
                                ? child.label
                                  ? child.label.toLowerCase()
                                  : ""
                                : ""
                            }
                          >
                            <div className="flex gap-4 items-center">
                              <div className="flex text-md">{child.icons}</div>
                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    variants={textAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="flex whitespace-nowrap capitalize text-xs font-public"
                                  >
                                    {child.label}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <NavLink
                  title={
                    !isOpen
                      ? route.label
                        ? route.label.toLowerCase()
                        : ""
                      : ""
                  }
                  key={index}
                  href={route.href}
                  className={`p-5 py-6 flex justify-between whitespace-nowrap font-public items-center ease-in duration-150 hover:ease-in hover:bg-gray-600  hover:text-white h-6 ${
                    isNavLinkActive(route.href) ? "bg-gray-600 text-white" : ""
                  }`}
                >
                  <div className="flex gap-4 items-center">
                    <div className="flex text-xl">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={textAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="flex whitespace-nowrap capitalize text-sm font-public "
                        >
                          {route.label}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </NavLink>
              )
            )}
          </section>
        </motion.div>
      </section>
    </div>
  )
}
