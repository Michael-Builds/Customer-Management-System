import { useRouter } from "next/router";
import styles from "./page.module.css";
import { TopBar } from "../Navigation/TopNavigation";
import { SideNav } from "../Navigation/SideNavigation";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export const PageLayout = () => {
  return (
    <main>
      <div className={styles.main_container}>
        <div className="flex h-screen overflow-hidden">
          <div>
            <SideNav />
          </div>
          <div className="w-full">
            <TopBar />
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};
