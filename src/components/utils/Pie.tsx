import styles from "./page.module.css"
import { RingProgress, Text } from "@mantine/core"
import { PiArrowDownLight } from "react-icons/pi"
import { RxArrowUp } from "react-icons/rx"

export const PieChart = () => {
  return (
    <div
      className={`bg-white p-4 w-full rounded-lg shadow-md border ${styles.pie}`}
    >
      <h3 className="text-lg font-semibold text-gray font-nun ">Stock</h3>
      <p className="mb-4">Recent Stock</p>
      <div className={`${styles.ring}`}>
        <RingProgress
          size={200}
          sections={[{ value: 90, color: "#00c2b2" }]}
          label={
            <Text c="#00c2b2" fw={900} ta="center" size="xl">
              90
            </Text>
          }
        />
      </div>
      <p className="mt-1 text-center font-semibold">Total sales made today</p>
      <p className="text-center mt-1 text-sm">
        Traditional heading elements are designed to work best in the meat of
        your page content.
      </p>
      <div className={styles.benefits}>
        <div>
          <h1>Target</h1>
          <div className={styles.gains}>
            <RxArrowUp className={styles.income} />
            <span className={styles.amount}>$7.8k</span>
          </div>
        </div>
        <div>
          <h1>Last week</h1>
          <div className={styles.notgains}>
            <PiArrowDownLight className={styles.loss} />
            <span className={styles.amount}>$1.4k</span>
          </div>
        </div>
      </div>
    </div>
  )
}
