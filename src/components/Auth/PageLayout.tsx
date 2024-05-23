import { TopBar } from "../Navigation/TopNavigation"
import { SideNav } from "../Navigation/SideNavigation"
import styles from "./page.module.css"
import { memo } from "react";

const MemoizedSideNav = memo(SideNav);
const MemoizedTopBar = memo(TopBar);

const PageLayout = ({ children }: any) => {
  return (
    <main>
      <div className={styles.main_container}>
        <div className="flex h-screen overflow-hidden">
          <div>
          <MemoizedSideNav />
          </div>
          <div className="w-full">
          <MemoizedTopBar />
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default PageLayout
