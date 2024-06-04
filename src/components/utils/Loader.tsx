import React from "react"
import styles from "./page.module.css"

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div
        className={`${styles.jimu_primary_loading} items-center justify-center`}
      ></div>
    </div>
  )
}

export default Loader
