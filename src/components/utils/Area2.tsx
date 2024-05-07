import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts"
import styles from "./page.module.css"

const data = [
  {
    name: "2001",
    imports: 4000,
    exports: 2400,
  },
  {
    name: "2002",
    imports: 3000,
    exports: 1398,
  },
  {
    name: "2003",
    imports: 2000,
    exports: 9800,
  },
  {
    name: "2004",
    imports: 2780,
    exports: 3908,
    amt: 2000,
  },
  {
    name: "2005",
    imports: 1890,
    exports: 4800,
  },
  {
    name: "2006",
    imports: 2390,
    exports: 3800,
  },
]

export const Area2Graph = () => {
  return (
    <div className={`${styles.area2} shadow-lg p-3 rounded-lg `}>
      <h1 className={styles.header}>Total Revenue</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="imports" stroke="red" fill="red" />
          <Line
            type="monotone"
            dataKey="exports"
            stroke="#00c2b2"
            fill="#00c2b2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
