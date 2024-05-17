import React from "react"
import PageLayout from "./PageLayout"

const withLayout = (WrappedComponent: any) => {
  const ComponentWithLayout = (props: any) => (
    <div className="bg-white">
      <PageLayout>
        <WrappedComponent {...props} />
      </PageLayout>
    </div>
  )

  ComponentWithLayout.displayName = `withLayout(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`

  return ComponentWithLayout
}

export default withLayout
