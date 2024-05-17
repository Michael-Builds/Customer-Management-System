import styles from "./page.module.css"
import Image from "next/image"
import Logo from "../../../public/Assets/logo-dark.png"
import { TextInput, PasswordInput, Checkbox, Button } from "@mantine/core"
import Link from "next/link"
import { useRouter } from "next/router"
import NotificationModal from "@/components/utils/NotificationModal"
import { useState } from "react"

const initialFormState = {
  email: "",
  password: "",
}

const Login = ({ setIsAuthenticated }: any) => {
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
          <>
            <Image src={Logo} height={160} width={160} alt="Logo" />
          </>
        </div>
        <div className={styles.form}>
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

          <Checkbox mt="lg" label="Remember me" />
          <Button fullWidth className="mt-6" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
      <div className={styles.others}>
        <p className={styles.forgot_password}>
          <a href="#">Forgot your password?</a>
        </p>
        <div className={styles.sign_up}>
          <p className={styles.no_account_text}>Do not have an account?</p>
          <span className={styles.signup}>
            <Link href="/signup">Sign up</Link>
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
export default Login
