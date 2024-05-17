import React from "react"
import withLayout from "@/components/Auth/WithLayout"
import Categories from "@/components/Products/ProductCategories"

const index = () => {
  return <Categories />
}

export default withLayout(index)
