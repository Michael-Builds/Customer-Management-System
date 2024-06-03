import { TopBar } from "../Navigation/TopNavigation"
import { SideNav } from "../Navigation/SideNavigation"
import styles from "./page.module.css"
import { memo } from "react"
import NotFound from "../404/NotFound"
import { useRouter } from "next/router"

const validRoutes = [
  "/dashboard",
  "/products/add",
  "/products/manage",
  "/customers",
]

const MemoizedSideNav = memo(SideNav)
const MemoizedTopBar = memo(TopBar)

const PageLayout = ({ children }: any) => {
  const router = useRouter()
  const isValidRoute = validRoutes.includes(router.pathname)

  return (
    <main>
      <div className={styles.main_container}>
        <div className="flex h-screen overflow-hidden">
          <div>
            <MemoizedSideNav />
          </div>
          <div className="w-full">
            <MemoizedTopBar />
            {isValidRoute ? children : <NotFound />}
          </div>
        </div>
      </div>
    </main>
  )
}

export default PageLayout
