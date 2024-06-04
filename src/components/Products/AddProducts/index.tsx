import React from "react"
import styles from "./page.module.css"
import { Tabs } from "@mantine/core"
import { SlBadge } from "react-icons/sl"
import Loader from "@/components/utils/Loader"

// Component for product information
const ProductInformation = () => {
  return (
    <section className="relative justify-center flex items-center w-full pb-10 h-[35rem] ">
      <div className="bg-green_bg opacity-10 rounded-lg absolute inset-0 z-0"></div>
      <div className="items-center justify-center flex flex-col align-center">
        <SlBadge className="h-16 w-16 text-primary" />
        <h1 className="mt-4 font-quicksand font-bold text-2xl">
          Enroll in Your Next Program
        </h1>
        <p className="mt-2 font-quicksand">
          Take the next step in your learning journey
        </p>
        <button className="mt-10 bg-primary text-white font-quicksand p-3 pl-8 pr-8 rounded-md">
          Browse Courses
        </button>
      </div>
    </section>
  )
}
// Working on the New Changes

// Component for pricing information
const PricingInformation = () => {
  return (
    <section className="relative justify-center flex items-center w-full pb-10 h-[35rem] ">
      <div className="bg-green_bg opacity-10 rounded-lg absolute inset-0 z-0"></div>
      <div className="items-center justify-center flex flex-col align-center">
        <SlBadge className="h-16 w-16 text-primary" />
        <h1 className="mt-4 font-quicksand font-bold text-2xl">
          Enroll in Your Next Program
        </h1>
        <p className="mt-2 font-quicksand">
          Take the next step in your learning journey
        </p>
        <button className="mt-10 bg-primary text-white font-quicksand p-3 pl-8 pr-8 rounded-md">
          Browse Courses
        </button>
      </div>
    </section>
  )
}

// Component for reviews
const Review = () => {
  return (
    <section className="relative justify-center flex items-center w-full pb-10 h-[35rem] ">
      <div className="bg-green_bg opacity-10 rounded-lg absolute inset-0 z-0"></div>
      <div className="items-center justify-center flex flex-col align-center">
        <SlBadge className="h-16 w-16 text-primary" />
        <h1 className="mt-4 font-quicksand font-bold text-2xl">
          Enroll in Your Next Program
        </h1>
        <p className="mt-2 font-quicksand">
          Take the next step in your learning journey
        </p>
        <button className="mt-10 bg-primary text-white font-quicksand p-3 pl-8 pr-8 rounded-md">
          Browse Courses
        </button>
      </div>
    </section>
  )
}

const AddProducts = () => {
  return (
    <section className={styles.main}>
      <div className={styles.tableForm}>
        <h1 className={styles.title}>Add Products</h1>

        <Tabs color="teal" defaultValue="first" className="mt-12">
          <Tabs.List>
            <Tabs.Tab
              value="first"
              color="rgb(12 74 110)"
              className="font-quicksand font-medium text-2xl"
            >
              Product Information
            </Tabs.Tab>
            <Tabs.Tab
              value="second"
              color="rgb(12 74 110)"
              className="font-quicksand font-medium text-2xl"
            >
              Pricing Information
            </Tabs.Tab>
            <Tabs.Tab
              value="third"
              color="rgb(12 74 110)"
              className="font-quicksand font-medium text-2xl"
            >
              Review
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="first" pt="xl">
            <ProductInformation />
          </Tabs.Panel>

          <Tabs.Panel value="second" pt="xl">
            <PricingInformation />
          </Tabs.Panel>

          <Tabs.Panel value="third" pt="xl">
            <Review />
          </Tabs.Panel>
        </Tabs>
      </div>
    </section>
  )
}

export default AddProducts
