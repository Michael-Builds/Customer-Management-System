import styles from "./page.module.css"
import Image from "next/image"
const people = [
  {
    name: "Jane Doe",
    phone: "555-1234",
    email: "jane.doe@example.com",
    location: "New York, NY",
    createdDate: "2021-07-21",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "John Smith",
    phone: "555-5678",
    email: "john.smith@example.com",
    location: "Los Angeles, CA",
    createdDate: "2021-08-15",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Alice Johnson",
    phone: "555-8765",
    email: "alice.johnson@example.com",
    location: "Chicago, IL",
    createdDate: "2021-09-01",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Mark Lee",
    phone: "555-4321",
    email: "mark.lee@example.com",
    location: "Houston, TX",
    createdDate: "2021-10-23",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
]

export const Customers = () => {
  return (
    <div className={`${styles.customers} rounded-lg shadow-lg`}>
      <div className="mt-4 flow-root ">
        <h1 className="-mt-5 text-lg font-semibold">Top 5 Customers</h1>
        <p className="text-sm mb-2">
          Transaction period from 21 July to 25 Aug
        </p>
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 ">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Customer
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm whitespace-nowrap font-semibold text-gray-900"
                  >
                    Created Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="h-11 w-11 flex-shrink-0">
                          <Image
                            className="h-11 w-11 rounded-full"
                            src={person.image}
                            alt=""
                            height={12}
                            width={12}
                          />
                        </div>
                        <div className="ml-4 font-medium text-gray-900">
                          {person.name}
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div className="text-gray-900">{person.phone}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {person.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {person.location}
                    </td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {person.createdDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
