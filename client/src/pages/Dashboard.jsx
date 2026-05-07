import { useEffect, useState } from "react";
import API from "../services/api";
import Layout from "../layout/Layout";

export default function Dashboard() {

  const [contacts, setContacts] =
    useState([]);

  useEffect(() => {

    fetchContacts();

  }, []);

  const fetchContacts = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const res = await API.get(
        "/contact",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setContacts(res.data);

    } catch (err) {

      console.log(err);

    }
  };

  return (
    <Layout>

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

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

            </tr>

          </thead>

          <tbody>

            {
              contacts.map((item) => (

                <tr
                  key={item._id}
                  className="border-b"
                >

                  <td className="p-5">
                    {item.name}
                  </td>

                  <td className="p-5">
                    {item.mobile}
                  </td>

                  <td className="p-5">
                    {item.discount}
                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </Layout>
  );
}