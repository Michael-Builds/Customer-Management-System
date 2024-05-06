import React from "react"
import PageLayout from "./PageLayout"

const withLayout = (WrappedComponent: any) => {
  return (props: any) => (
    <div className="bg-white">
      <PageLayout>
        <WrappedComponent {...props} />
      </PageLayout>
    </div>
  )
}
export default withLayout
