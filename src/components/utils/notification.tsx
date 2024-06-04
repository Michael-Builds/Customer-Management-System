import React, { useState, useRef, useEffect } from "react"
import { IoIosNotifications } from "react-icons/io"
import { IconSettings, IconPhoto, IconMessageCircle } from "@tabler/icons-react"
import styles from "./page.module.css"

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={toggleDropdown}>
        <IoIosNotifications
          className={`${styles.icon} h-6 w-6 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-500 transform hover:scale-100`}
        />
        <div className="absolute -top-1 -right-1 bg-red-500 rounded-full h-4 w-4 flex items-center justify-center text-white text-xs">
          5
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10">
          <div>
            <div className="px-4 py-2 text-sm font-semibold">Today</div>
            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center cursor-pointer">
              <IconMessageCircle className="h-4 w-4 mr-2" />
              My Account
            </div>
            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center cursor-pointer">
              <IconSettings className="h-4 w-4 mr-2" />
              Settings
            </div>

            <div className="px-4 py-2 text-sm font-semibold">Yesterday</div>
            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center cursor-pointer">
              <IconPhoto className="h-4 w-4 mr-2" />
              Gallery
            </div>
            <div className="border-b"></div>
            <div className="text-center justify-center hover:bg-gray-100 hover:text-gray-900  align-center cursor-pointer">
              <p className="text-sm p-2 text-blue-400">View All</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Notification
