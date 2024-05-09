import React from "react"
import styles from "./product.module.css"
import { CiImport } from "react-icons/ci"
import { CiExport } from "react-icons/ci"
import { FiPrinter } from "react-icons/fi"
import Table from "./Table"

const ManageProducts = () => {
  const handleExport = () => {
    // Implement your export logic here
    console.log("Export functionality")
  }

  const handleImport = () => {
    // Implement your import logic here
    console.log("Import functionality")
  }

  const handlePrint = () => {
    // Implement your print logic here
    console.log("Print functionality")
  }

  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.head}>Products</h1>
        <div className={styles.handlers}>
          <button className={styles.export} onClick={handleExport}>
            <CiExport className={styles.icon} /> <p>Export</p>
          </button>
          <button className={styles.import} onClick={handleImport}>
            <CiImport className={styles.icon} /> <p>Import</p>
          </button>
          <button className={styles.print} onClick={handlePrint}>
            <FiPrinter className={styles.icon} /> <p>Print</p>
          </button>
        </div>
      </div>
      <div className={styles.table}>
        <h1 className="text-lg font-semibold">Product List</h1>
        <p className="text-sm mb-4">
          Transaction period from 21 July to 25 Aug
        </p>
        <div>
          <Table />
        </div>
      </div>
    </section>
  )
}

export default ManageProducts
