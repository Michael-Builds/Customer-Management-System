import React from "react"
import styles from "./page.module.css"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

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

export const AreaGraph = () => {
  return (
    <div className={`${styles.area} w-full rounded-lg shadow-lg pt-2 pb-3`}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 26,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Area type="monotone" dataKey="exports" stroke="red" fill="red" />
          <Area
            type="monotone"
            dataKey="imports"
            stroke="#00c2b2"
            fill="#00c2b2"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
