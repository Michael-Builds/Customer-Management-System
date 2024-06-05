import React from "react"
import styles from "./page.module.css"
import { MdKeyboardArrowRight } from "react-icons/md"
import { WaterMark } from "./WaterMark"
import Logo from "../../../public/Assets/logo-dark.png"
import Image from "next/image"
import { BsPrinterFill } from "react-icons/bs";

const invoice = () => {
    
     const handlePrint = () => {
    window.print();
    };
    
  return (
    <section className={styles.invoiceMain}>
      <div className={styles.topHeader}>
        <h1>Invoice</h1>
        <div className={styles.breadCrumbs}>
          <p>Extra Pages</p>
          <MdKeyboardArrowRight />
          <p>Invoice</p>
        </div>
      </div>
      <div className={styles.invoiceBody}>
        <div className={styles.companyProfile}>
          <div>
            <Image src={Logo} height={130} width={130} alt="Logo" />
            <h1 className={styles.accountHolder}>
              Hello,
              <span>Michael Kabanda</span>
            </h1>
            <p className={styles.thanksGiving}>
              Thanks a lot because you keep purchasing our products. Our company
              promises to provide high quality products for you as well as
              outstanding customer service for every transaction.
            </p>
          </div>
          <div className={styles.invoiceTop}>
            <h1 className={styles.typeofReceipt}>Invoice</h1>
            <p className={styles.order}>
              Order Date: <span>Jan 17, 2024</span>
            </p>
            <p className={styles.order}>
              Order Status: <span className={styles.status}>Unpaid</span>
            </p>
            <p className={styles.order}>
              Order No: <span>000028</span>
            </p>
          </div>
        </div>
        <div className={styles.billingAddress}>
          <div>
            <h1 className={styles.billingTitle}>Bill Address</h1>
            <div className={styles.userBillingAddress}>
              <p>Michael Kabanda</p>
              <p>795 Folsom Ave, Suite 600</p>
              <p>San Francisco, CA 94107</p>
              <p>P: (123) 456-7890</p>
            </div>
          </div>
          <div>
            <h1 className={styles.shippingTitle}>Shipping Address</h1>
            <div className={styles.userShippingAddress}>
              <p>Michael Kabanda</p>
              <p>795 Folsom Ave, Suite 600</p>
              <p>San Francisco, CA 94107</p>
              <p>P: (123) 456-7890</p>
            </div>
          </div>
        </div>
        <div className={styles.invoiceItems}>
          <table
            className={`min-w-full divide-y divide-gray-300 ${styles.invoiceTable}`}
          >
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5  pl-4 pr-3 text-left text-sm font-bold text-gray-900 sm:pl-0"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                >
                  Item
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-right text-sm font-bold text-gray-900"
                >
                  Hours
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-right text-sm font-bold text-gray-900"
                >
                  Hours Rate
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-right text-sm whitespace-nowrap font-bold text-gray-900"
                >
                  Total
                </th>
              </tr>
            </thead>
            <tbody className={`divide-y divide-gray-200  bg-white `}>
              {data.map((person, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap text-left  text-sm text-gray-500">
                    <span className="text-gray-900 ">{person.number}</span>
                  </td>
                  <td className="whitespace-nowrap flex flex-col px-3 py-5 text-sm text-gray-500">
                    <span className="text-gray-900">{person.name}</span>
                    <span className="text-gray-900 text-xs">
                      {person.description}
                    </span>
                  </td>
                  <td className="whitespace-nowrap text-right px-3 py-5 text-sm text-gray-500">
                    <span className="text-gray-900">{person.hours}</span>
                  </td>
                  <td className="whitespace-nowrap text-right px-3 py-5 text-sm text-gray-500">
                    <span className="text-gray-900">{person.rate}</span>
                  </td>
                  <td className="whitespace-nowrap text-right px-3 py-5 text-sm text-gray-500">
                    <span className="text-gray-900">{person.total}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.calculations}>
          <div className={styles.addUpText}>
            <h1>Notes</h1>
            <p>
              All accounts are to be paid within 7 days from receipt of invoice.
              To be paid by cheque or credit card or direct payment online. If
              account is not paid within 7 days the credits details supplied as
              confirmation of work undertaken will be charged the agreed quoted
              fee noted above.
            </p>
          </div>
          <div className={styles.calButtons}>
            <p className={styles.subs}>
              Sub-total : <span className={styles.total}>$4597.50</span>
            </p>
            <p className={styles.subs}>
              Discount(10%) : <span className={styles.total}>$4597.50</span>
            </p>
            <h1 className={styles.sums}>$4137.75 USD</h1>

            <div className={styles.btns}>
              <button className={styles.btn1} onClick={handlePrint}> <BsPrinterFill/>Print</button>
              <button className={styles.btn2}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.watermark}>
        <WaterMark />
      </div>
    </section>
  )
}

export default invoice

export const data = [
  {
    id: 1,
    number: "1",
    name: "Web Design",
    description: "2 Pages static website - my website",
    hours: "22",
    rate: "$30",
    total: "$660",
  },
  {
    id: 2,
    number: "2",
    name: "Web Design",
    description: "2 Pages static website - my website",
    hours: "22",
    rate: "$30",
    total: "$660",
  },
]
