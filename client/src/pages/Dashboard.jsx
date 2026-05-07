import Layout from "../layout/Layout";
import { useState } from "react";

export default function Dashboard() {
const [selectedContact, setSelectedContact] = useState(null);

  return (
    <Layout>

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your contacts
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition">
          <h3 className="text-gray-500">
            Contacts
          </h3>

          <p className="text-4xl font-bold text-primary mt-3">
            120
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition">
          <h3 className="text-gray-500">
            Discounts
          </h3>

          <p className="text-4xl font-bold text-secondary mt-3">
            25
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition">
          <h3 className="text-gray-500">
            Revenue
          </h3>

          <p className="text-4xl font-bold text-danger mt-3">
            ₹12K
          </p>
        </div>

      </div>

      {/* Table */}
     {/* Table */}
<div className="bg-white rounded-3xl shadow-lg overflow-hidden">

  <div className="p-6 border-b">

    <h2 className="text-2xl font-semibold">
      Recent Contacts
    </h2>

  </div>

  <div className="overflow-x-auto">

    <table className="w-full">

      <thead className="bg-gray-100">

        <tr>

          <th className="p-5 text-left">
            Name
          </th>

          <th className="p-5 text-left">
            Mobile
          </th>

          <th className="p-5 text-left">
            Discount
          </th>

          <th className="p-5 text-left">
            Description
          </th>

          <th className="p-5 text-left">
            Action
          </th>

        </tr>

      </thead>

      <tbody>

        <tr className="border-b hover:bg-gray-50 transition">

          <td className="p-5">
            Nikhil
          </td>

          <td className="p-5">
            9999999999
          </td>

          <td className="p-5">
            10%
          </td>

          <td className="p-5">

            <button
              onClick={() =>
                setSelectedContact({
                  name: "Nikhil",
                  mobile: "9999999999",
                  description:
                    "Premium customer with yearly subscription and bulk orders.",
                  material: "Gold",
                  date: "2026-05-07",
                  discount: "10%",
                })
              }
              className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-secondary transition"
            >
              View
            </button>

          </td>

          <td className="p-5">

            <button className="bg-danger text-white px-4 py-2 rounded-xl hover:opacity-90">
              Delete
            </button>

          </td>

        </tr>

      </tbody>

    </table>

  </div>

</div>
{/* Modal */}
{
  selectedContact && (

    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">

      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8 relative">

        {/* Close */}
        <button
          onClick={() => setSelectedContact(null)}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 w-10 h-10 rounded-full"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-primary mb-6">
          Contact Details
        </h2>

        {/* Info */}
        <div className="space-y-5">

          <div>
            <p className="text-gray-500">
              Name
            </p>

            <h3 className="text-xl font-semibold">
              {selectedContact.name}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Mobile
            </p>

            <h3 className="text-xl font-semibold">
              {selectedContact.mobile}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Description
            </p>

            <p className="mt-2 text-gray-700 leading-relaxed">
              {selectedContact.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">

            <div>
              <p className="text-gray-500">
                Material
              </p>

              <h3 className="font-semibold">
                {selectedContact.material}
              </h3>
            </div>

            <div>
              <p className="text-gray-500">
                Discount
              </p>

              <h3 className="font-semibold">
                {selectedContact.discount}
              </h3>
            </div>

          </div>

          <div>
            <p className="text-gray-500">
              Date
            </p>

            <h3 className="font-semibold">
              {selectedContact.date}
            </h3>
          </div>

        </div>

      </div>

    </div>

  )
}

    </Layout>
  );
}