import styles from "./page.module.css"
import DashboardCard from "../utils/datacards"
import { PiArrowDownLight } from "react-icons/pi"
import { RxArrowUp } from "react-icons/rx"
import Link from "next/link"
import { Bar_Chart } from "../utils/Bar"
import { PieChart } from "../utils/Pie"
import { AreaGraph } from "../utils/Area"

const Dashboard = () => {
  const data = [
    {
      title: "Cost per Unit",
      value: "$17.21",
      icon: <RxArrowUp className="text-green-500" />,
      period: "Daily",
      rate: "12.5% ",
      progressValue: 65,
      color: "rgb(32 181 153)",
    },
    {
      title: "Market Revenue",
      value: "$1875.54",
      icon: <PiArrowDownLight className="text-red-500" />,
      period: "Per Week",
      rate: "18.71%",
      progressValue: 60,
      color: "rgb(250 89 68)",
    },
    {
      title: "Expenses",
      value: "$784.62",
      icon: <RxArrowUp className="text-green-500" />,
      period: "Per Month",
      rate: "57% ",
      progressValue: 60,
      color: "rgb(239 181 64)",
    },
    {
      title: "Daily Visits",
      value: "1,15,187",
      icon: <PiArrowDownLight className="text-red-500" />,
      period: "All Time",
      rate: "17.8% ",
      progressValue: 60,
      color: "rgb(60 186 222)",
    },
  ]
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
            progressValue={item.progressValue}
            color={item.color}
          />
        ))}
      </div>
      <div className={styles.statistics}>
        <Bar_Chart />
        <PieChart />
        <AreaGraph />
      </div>
    </div>
  )
}

export default Dashboard
