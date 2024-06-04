import styles from "./page.module.css"
import Image from "next/image"
import Logo from "../../../public/Assets/logo-dark.png"
import { TextInput, Button } from "@mantine/core"
import Link from "next/link"
import { useRouter } from "next/router"
import NotificationModal from "@/components/utils/NotificationModal"
import { useState } from "react"
import Avatar from "../../../public/Assets/avatar.jpg"

const initialFormState = {
  email: "",
  password: "",
}

const LockScreen = ({ setIsAuthenticated }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState({
    title: "",
    description: "",
    status: "success",
  })

  const closeModal = () => setIsModalOpen(false)
  const [formData, setFormData] = useState(initialFormState)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFormReset = () => {
    setFormData({
      email: "",
      password: "",
    })
  }

  const validateForm = () => {
    return Object.values(formData).every((x) => x !== "")
  }

  const handleLogin = () => {
    const isAuthenticated = true

    setIsAuthenticated(isAuthenticated)
    if (isAuthenticated) {
      router.push("/dashboard")
    } else {
      setModalData({
        title: "Authentication Failed",
        description: "Invalid email or password.",
        status: "error",
      })
      setIsModalOpen(true)
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.formContainer}>
        <div className={styles.logo}>
          <Image src={Logo} height={160} width={160} alt="Logo" />
        </div>
        <div className="justify-center flex items-center mt-10 ">
          <Image
            src={Avatar}
            height={100}
            width={100}
            alt="Logo"
            className="rounded-full"
          />
        </div>
        <div className="justify-center flex flex-col mt-1 items-center">
          <h1>Hi ! Michael K.</h1>
          <p className="text-sm mt-2">
            Enter your password to access the admin.
          </p>
        </div>
        <div className={styles.form}>
          <label htmlFor="email" className="block text-gray-700 mt-4">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="appearance-none bg-transparent border-gray-300 text-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            className="mt-6 bg-blue-500 text-sm w-full p-2 text-white rounded-sm hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
      <div className={styles.others}>
        <div className={styles.sign_up}>
          <p className={styles.no_account_text}>Not you? return</p>
          <span className={styles.signup}>
            <Link href="/login" className="text-white font-medium">
              Login
            </Link>
          </span>
        </div>
      </div>
      <NotificationModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        title={modalData.title}
        description={modalData.description}
        status={modalData.status || "success"}
        onClose={closeModal}
      />
    </div>
  )
}
export default LockScreen
