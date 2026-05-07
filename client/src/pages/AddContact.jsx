import Layout from "../layout/Layout";
import { useState } from "react";
import axios from "axios";

export default function AddContact() {

  const [form, setForm] = useState({});

  const save = async () => {
    await axios.post(
      "http://localhost:5000/add",
      form,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    alert("Contact Saved");
  };

  return (
    <Layout>

      <div className="bg-white p-6 rounded-2xl shadow max-w-xl">

        <h2 className="text-2xl font-bold mb-5">
          Add Contact
        </h2>

        <div className="space-y-4">

          <input
            placeholder="Name"
            className="input"
            onChange={(e)=>
              setForm({...form,name:e.target.value})
            }
          />

          <input
            placeholder="Mobile"
            className="input"
            onChange={(e)=>
              setForm({...form,mobile:e.target.value})
            }
          />

          <input
            placeholder="Description"
            className="input"
            onChange={(e)=>
              setForm({...form,description:e.target.value})
            }
          />

          <input
            placeholder="Material"
            className="input"
            onChange={(e)=>
              setForm({...form,material:e.target.value})
            }
          />

          <input
            type="date"
            className="input"
            onChange={(e)=>
              setForm({...form,date:e.target.value})
            }
          />

          <input
            placeholder="Discount"
            className="input"
            onChange={(e)=>
              setForm({...form,discount:e.target.value})
            }
          />

          <button onClick={save} className="btn w-full">
            Save Contact
          </button>

        </div>
      </div>
    </Layout>
  );
}