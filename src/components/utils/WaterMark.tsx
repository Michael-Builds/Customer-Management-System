import styles from "./page.module.css"
import Link from "next/link"

export const WaterMark = () => {
  
  const getCurrentYear = () => {
    const currentYear = new Date().getFullYear()
    return currentYear
  }

  return (
    <div className={styles.mark}>
      <p className={styles.tag}>{getCurrentYear()} © Kemsey</p>
      <p className={styles.developer}>
        Design & Develop by
        <Link href="/profile/michael-builds">
          <span className={styles.mike}>Michael-Builds</span>
        </Link>
      </p>
    </div>
  )
}
