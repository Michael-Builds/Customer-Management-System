import React from "react";
import styles from "./page.module.css";
import ProgressComponent from "./progress";

const DashboardCard = ({ title, value, icon, percent, rate, period }: any) => {
  return (
    <div
      className={`${styles.card} shadow-lg p-6  items-center justify-between`}
    >
      <div className={styles.top}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.period}>{period}</p>
      </div>
      <div className={styles.middle}>
        <h3 className={styles.value}>{value}</h3>
        <div className={styles.right}>
          <p className={styles.rate}>{rate}</p>
          <p className={styles.icon}>{icon}</p>
        </div>
      </div>
      <div className={styles.progress}>
        <ProgressComponent percent={percent} />
      </div>
    </div>
  );
};

export default DashboardCard;
