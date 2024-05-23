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
          <TextInput
            mt="md"
            label="Email address"
            placeholder="Enter your email"
            className="text-gray-600"
          />
          <Button fullWidth className="mt-6" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
      <div className={styles.others}>
        <div className={styles.sign_up}>
          <p className={styles.no_account_text}>Not you? return</p>
          <span className={styles.signup}>
            <Link href="/signup" className="text-white font-bold">
              Sign up
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
