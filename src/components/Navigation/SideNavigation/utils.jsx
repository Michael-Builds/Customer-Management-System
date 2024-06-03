import { BsGrid1X2 } from "react-icons/bs"
import { BsCart3 } from "react-icons/bs"
import { SiGoogleanalytics } from "react-icons/si"
import { HiMiniCog6Tooth } from "react-icons/hi2"
import { BiSupport } from "react-icons/bi"
import { FaLuggageCart } from "react-icons/fa"
import { PiUsersThreeFill } from "react-icons/pi"
import { BsFillMegaphoneFill } from "react-icons/bs"
import { FaQuestion } from "react-icons/fa6"
import { MdOutlineForum } from "react-icons/md"


export const routes = [
    {
        heading: "Main",
        items: [
            {
                label: "Dashboard",
                href: "/dashboard",
                icon: <BsGrid1X2 size="1rem" stroke={`${1.5}`} />,
                children: [],
            },
        ],
    },
    {
        heading: "Utilities",
        items: [
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
                    { icons: "", label: "Create Discount Codes", href: "#required-for-focus" },
                    { icons: "", label: "Manage Promotions", href: "#required-for-focus" },
                    { icons: "", label: "Email Campaigns", href: "#required-for-focus" },
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
                ],
            },
        ],
    },
];
