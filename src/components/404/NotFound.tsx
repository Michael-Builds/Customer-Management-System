import styles from "./page.module.css"
import Image from "next/image"
import Logo from "../../../public/Assets/logo-dark.png"
import { Button } from "@mantine/core"
import ErrorImage from "../../../public/Assets/404-error.svg"

const NotFound = () => {
  return (
    <div className={styles.main}>
      <div className={styles.formContainer}>
        <div className={styles.logo}>
          <Image src={Logo} height={160} width={160} alt="Logo" />
        </div>
        <div className="justify-center flex items-center mt-12">
          <Image src={ErrorImage} height={160} width={160} alt="Logo" />
        </div>
        <p className="mt-6 text-md ">
          It's looking like you may have taken a wrong turn. Don't worry... it
          happens to the best of us. You might want to check your internet
          connection.
        </p>
        <Button fullWidth className="mt-6 ">
          Back to Home
        </Button>
      </div>
    </div>
  )
}
export default NotFound
