import React, { useState } from "react"
import styles from "./page.module.css"
import { MdOutlineCheck } from "react-icons/md"
import { RiAddLine } from "react-icons/ri"

// Component for product information
const ProductInformation = () => {
  return (
    <div>
      <h2 className={styles.infoTitle}>Product Information</h2>
      <div className={styles.imageSection}>
        <p>Image</p>
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder}>
            <RiAddLine className={styles.addIcon} />
          </div>
          <div className={styles.imagePlaceholder}>
            <RiAddLine className={styles.addIcon} />
          </div>
          <div className={styles.imagePlaceholder}>
            <RiAddLine className={styles.addIcon} />
          </div>
          <div className={styles.imagePlaceholder}>
            <RiAddLine className={styles.addIcon} />
          </div>
          <div className={styles.imagePlaceholder}>
            <RiAddLine className={styles.addIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}
// Working on the New Changes

// Component for pricing information
const PricingInformation = () => {
  return (
    <div>
      <h2>Pricing Information</h2>
      <p>Setup pricing, discounts, and other financial details here.</p>
    </div>
  )
}

// Component for reviews
const Review = () => {
  return (
    <div>
      <h2>Review</h2>
      <p>
        Manage and review customer feedback and internal quality assessments.
      </p>
    </div>
  )
}

const AddProducts = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id)

  // Function to change the active tab
  const handleTabClick = (id: any) => {
    setActiveTabId(id)
  }

  return (
    <section className={styles.main}>
      <div className={styles.tableForm}>
        <h1 className={styles.title}>Add Products</h1>

        <section className={styles.productSections}>
          {/* Left */}
          <div className={styles.tabs}>
            {tabs.map((item, index) => {
              return (
                <div
                  className={styles.tabDetails}
                  key={index}
                  onClick={() => handleTabClick(item.id)}
                >
                  <MdOutlineCheck />
                  <p
                    className={`${styles.tabButton} ${
                      item.id === activeTabId ? styles.activeTab : ""
                    }`}
                  >
                    {item.name}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Right */}
          <div className={styles.inputCompo}>
            {tabs.find((tab) => tab.id === activeTabId)?.content}
          </div>
        </section>
      </div>
    </section>
  )
}

export default AddProducts

export const tabs = [
  {
    id: 1,
    name: "Product Information",
    content: <ProductInformation />,
  },
  {
    id: 2,
    name: "Pricing Information",
    content: <PricingInformation />,
  },
  {
    id: 3,
    name: "Review",
    content: <Review />,
  },
]
