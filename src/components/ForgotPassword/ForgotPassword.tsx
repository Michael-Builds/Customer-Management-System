import styles from "./page.module.css"
import Image from "next/image"
import Logo from "../../../public/Assets/logo-dark.png"
import Link from "next/link"
import { useRouter } from "next/router"
import NotificationModal from "@/components/utils/NotificationModal"
import { useState } from "react"

const initialFormState = {
  email: "",
}

const ForgotPassword = ({ setIsAuthenticated }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState({
    title: "",
    description: "",
    status: "success",
  })
  const closeModal = () => setIsModalOpen(false)
  const [formData, setFormData] = useState(initialFormState)
  const router = useRouter()

  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
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
            className="appearance-none border-gray-300 bg-transparent text-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label
            htmlFor="remember"
            className="flex items-center gap-3 mt-5 -mb-1"
          >
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="cursor-pointer bg-transparent "
            />
            <span className="text-gray-600">Remember me</span>
          </label>
          <button   className="mt-6 bg-blue-500 w-full text-sm p-2 text-white rounded-sm hover:bg-blue-600" onClick={handleLogin}>
            Reset Password
          </button>
        </div>
      </div>
      <div className={styles.others}>
        <div className={styles.sign_up}>
          <p className={styles.no_account_text}>Already have an account?</p>
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
export default ForgotPassword
