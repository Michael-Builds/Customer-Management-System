import { TopBar } from "../Navigation/TopNavigation"
import { SideNav } from "../Navigation/SideNavigation"
import styles from "./page.module.css"

const PageLayout = ({ children }: any) => {
  return (
    <main>
      <div className={styles.main_container}>
        <div className="flex h-screen overflow-hidden">
          <div>
            <SideNav />
          </div>
          <div className="w-full">
            <TopBar />
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default PageLayout
