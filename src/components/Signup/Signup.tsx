import styles from "./page.module.css"
import Image from "next/image"
import Logo from "../../../public/Assets/logo-dark.png"
import { TextInput, PasswordInput, Checkbox, Button } from "@mantine/core"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
import NotificationModal from "../utils/NotificationModal"

const initialFormState = {
  fullname: "",
  email: "",
  password: "",
}

const Signup = ({ setIsAuthenticated }: any) => {
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
      fullname: "",
      email: "",
      password: "",
    })
  }

  const validateForm = () => {
    return Object.values(formData).every((x) => x !== "")
  }

  const handleSignup = () => {
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
          <>
            <Image src={Logo} height={160} width={160} alt="Logo" />
          </>
        </div>
        <div className={styles.form}>
          <TextInput
            mt="md"
            label="Name"
            placeholder="Enter your Name"
            className="text-gray-600"
          />
          <TextInput
            mt="md"
            label="Email address"
            placeholder="Enter your email"
            className="text-gray-600"
          />
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            className="mt-3 text-gray-600"
          />
          <Checkbox mt="lg" label="I accept Terms and Conditions" />
          <Button fullWidth className="mt-6" onClick={handleSignup}>
            Sign Up
          </Button>
        </div>
      </div>
      <div className={styles.others}>
        <div className={styles.sign_up}>
          <p className={styles.no_account_text}>Already have an account ? </p>
          <span className={styles.signup}>
            <Link href="/login">Login</Link>
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
export default Signup
