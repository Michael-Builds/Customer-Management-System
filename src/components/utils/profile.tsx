import React, { useState, useRef,useEffect } from "react"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import {
  IconSettings,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
} from "@tabler/icons-react"

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event:any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={toggleDropdown}
        className="flex items-center cursor-pointer"
      >
        <MdOutlineKeyboardArrowDown className="h-5 w-5 text-gray-500" />
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-4 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="">
            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center cursor-pointer">
              <IconMessageCircle className="h-4 w-4 mr-2" />
              My Account
            </div>
            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center cursor-pointer">
              <IconSettings className="h-4 w-4 mr-2" />
              Settings
            </div>
            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center cursor-pointer">
              <IconPhoto className="h-4 w-4 mr-2" />
              Gallery
            </div>
            <div className="border-b"></div>
            <div className="px-4 py-2 text-sm text-red-500 hover:bg-red-100 hover:text-red-700 flex items-center cursor-pointer">
              <IconTrash className="h-4 w-4 mr-2" />
              Logout
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
