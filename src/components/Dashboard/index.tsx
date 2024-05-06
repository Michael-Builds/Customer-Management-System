import styles from "./page.module.css";
import DashboardCard from "../utils/datacards";
import { PiArrowDownLight } from "react-icons/pi";
import { RxArrowUp } from "react-icons/rx";
import Link from "next/link";

const Dashboard = () => {
  const data = [
    {
      title: "Cost per Unit",
      value: "$17.21",
      icon: <RxArrowUp className="text-green-500" />,
      period: "Daily",
      rate: "12.5% ",
    },
    {
      title: "Market Revenue",
      value: "$1875.54",
      icon: <PiArrowDownLight className="text-red-500" />,
      period: "Per Week",
      rate: "18.71%",
    },
    {
      title: "Expenses",
      value: "$784.62",
      icon: <RxArrowUp className="text-green-500" />,
      period: "Per Month",
      rate: "57% ",
    },
    {
      title: "Daily Visits",
      value: "1,15,187",
      icon: <PiArrowDownLight className="text-red-500" />,
      period: "All Time",
      rate: "17.8% ",
    },
  ];
  
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <p className={styles.header_text}>Dashboard</p>
        <div className={styles.breadcrumb}>
          <Link href="/dashboard">Kemsey</Link>/<p>Dashboard</p>
        </div>
      </div>
      <div className={styles.datacards}>
        {data.map((item, index) => (
          <DashboardCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
            rate={item.rate}
            period={item.period}
          />
        ))}
      </div>


    </div>
  );
};

export default Dashboard;
