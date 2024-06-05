import React from "react"
import Invoice from "@/components/utils/invoice"
import withLayout from "@/components/Auth/WithLayout"

const index = () => {
  return <Invoice />
}

export default withLayout(index)
