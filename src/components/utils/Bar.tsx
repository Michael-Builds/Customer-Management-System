import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"
import styles from "./page.module.css"
const yearly = [
  { label: "2001", imports: 21, exports: 20 },
  { label: "2002", imports: 35, exports: 15 },
  { label: "2003", imports: 75, exports: 5 },
  { label: "2004", imports: 51, exports: 9 },
  { label: "2005", imports: 41, exports: 22 },
  { label: "2006", imports: 47, exports: 24 },
]

const generateRandomImport = () => Math.floor(Math.random() * 1000)
const generateRandomExports = () => Math.floor(Math.random() * 2000)

const generateYearlyData = () => {
  return yearly.map((year) => ({
    label: year.label,
    imports: generateRandomImport(),
    exports: generateRandomExports(),
  }))
}

export const Bar_Chart = () => {
  const chartData = generateYearlyData()
  return (
    <div className={`${styles.bar} w-full bg-white shadow-md rounded-md  p-4 `}>
      <div className=" col-md-6">
        <h3 className="text-lg font-semibold text-gray font-nun ">
          Sales Analytics
        </h3>
        <p className="mb-4">From date of 1st Jan 2020 to continue</p>
        <ResponsiveContainer width="100%" height={332}>
          <BarChart
            data={chartData}
            margin={{ top: 15, right: 0, bottom: 15, left: 0 }}
            className="font-nun md:ml-0 -ml-5"
          >
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="imports" fill="#00c2b2" />
            <Bar dataKey="exports" fill="red" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
