import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const registerUser = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await API.post(
        "/auth/register",
        form
      );

      alert("Registration Successful");

      navigate("/");

    } catch (err) {

      console.log(err);

      alert("Registration Failed");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] p-5">

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 w-full max-w-md rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Create Account
        </h1>

        <p className="text-gray-300 text-center mb-8">
          Register your SaaS account
        </p>

        <form
          onSubmit={registerUser}
          className="space-y-5"
        >

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white outline-none"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white outline-none"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />

          <button
            disabled={loading}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-2xl font-semibold transition"
          >
            {
              loading
                ? "Creating..."
                : "Register"
            }
          </button>

        </form>

        <p className="text-center text-gray-300 mt-6">
          Already have account?
        </p>

        <Link
          to="/"
          className="block text-center text-pink-400 font-semibold mt-2"
        >
          Login
        </Link>

      </div>
    </div>
  );
}