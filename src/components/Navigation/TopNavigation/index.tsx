import styles from "./page.module.css"
import { IoMenuOutline } from "react-icons/io5"
import { useDisclosure } from "@mantine/hooks"
import { Modal, TextInput } from "@mantine/core"
import { IoIosSearch } from "react-icons/io"
import { IoMoonOutline } from "react-icons/io5"
import Profile from "@/components/utils/user"
import { IoMdExpand } from "react-icons/io"
import Indicator from "../../Loader/Render"
import Notification from "@/components/utils/notification"
import { MdSunny } from "react-icons/md"
import { useState } from "react"

export const TopBar = () => {
  const [opened, { open, close }] = useDisclosure(false)
  const [isMoonActive, setIsMoonActive] = useState(true)

  const toggleIcon = () => {
    setIsMoonActive((prev) => !prev)
  }

  return (
    <div className={styles.topbar}>
      <div className={styles.top_items}>
        <div className="pl-8">
          <IoMenuOutline className="h-7 w-7 text-gray-600 cursor-pointer" />
        </div>
        <div className={styles.right_top}>
          <div>
            <Indicator />
          </div>
          <div>
            <IoMdExpand className={`${styles.icon} h-5 w-5  cursor-pointer`} />
          </div>
          <div>
            <Modal opened={opened} onClose={close} withCloseButton={false}>
              <TextInput placeholder="Search...." />
            </Modal>

            <IoIosSearch
              onClick={open}
              className={` ${styles.icon} h-5 w-5 cursor-pointer`}
            />
          </div>
          <Notification />
          <div
            onClick={toggleIcon}
            className="transition-opacity duration-200 ease-in-out"
          >
            {isMoonActive ? (
              <IoMoonOutline
                className={`h-5 w-5  cursor-pointer ${styles.icon}  ${
                  isMoonActive ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : (
              <MdSunny
                className={`h-5 w-5 cursor-pointer ${styles.icon} ${
                  isMoonActive ? "opacity-0" : "opacity-100"
                }`}
              />
            )}
          </div>
          <Profile />
        </div>
      </div>
    </div>
  )
}
