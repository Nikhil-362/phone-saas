import { useState } from "react";
import API from "../services/api";
import Layout from "../layout/Layout";

export default function AddContact() {

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    description: "",
    material: "",
    date: "",
    discount: "",
  });

  const addContact = async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      await API.post(
        "/contact",
        form,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert("Contact Added");

    } catch (err) {

      console.log(err);

      alert("Failed");

    }
  };

  return (
    <Layout>

      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Add Contact
        </h1>

        <form
          onSubmit={addContact}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          <input
            placeholder="Name"
            className="p-4 border rounded-2xl"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            placeholder="Mobile"
            className="p-4 border rounded-2xl"
            onChange={(e) =>
              setForm({
                ...form,
                mobile: e.target.value,
              })
            }
          />

          <input
            placeholder="Material"
            className="p-4 border rounded-2xl"
            onChange={(e) =>
              setForm({
                ...form,
                material: e.target.value,
              })
            }
          />

          <input
            placeholder="Discount"
            className="p-4 border rounded-2xl"
            onChange={(e) =>
              setForm({
                ...form,
                discount: e.target.value,
              })
            }
          />

          <input
            type="date"
            className="p-4 border rounded-2xl"
            onChange={(e) =>
              setForm({
                ...form,
                date: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Description"
            className="p-4 border rounded-2xl md:col-span-2"
            rows="5"
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />

          <button className="bg-indigo-600 text-white py-4 rounded-2xl md:col-span-2 font-semibold">
            Add Contact
          </button>

        </form>

      </div>

    </Layout>
  );
}