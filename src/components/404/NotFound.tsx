import styles from "./page.module.css"
import Image from "next/image"
import Logo from "../../../public/Assets/logo-dark.png"
import ErrorImage from "../../../public/Assets/404-error.svg"
import { useRouter } from "next/router"

const NotFound = () => {
  const router = useRouter()

  const handleBackToHome = () => {
    router.push("/dashboard")
  }

  return (
    <div className={styles.main}>
      <div className={styles.formContainer}>
        <div className={styles.logo}>
          <Image src={Logo} height={160} width={160} alt="Logo" />
        </div>
        <div className="justify-center flex items-center mt-10">
          <Image src={ErrorImage} height={160} width={160} alt="Logo" />
        </div>
        <p className="mt-8 text-sm">
          It is looking like you may have taken a wrong turn. Do not worry... it
          happens to the best of us. You might want to check your internet
          connection.
        </p>
        <button
          onClick={handleBackToHome}
          className="mt-6 w-full py-2 text-sm px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}
export default NotFound
