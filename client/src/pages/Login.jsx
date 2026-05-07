import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const loginUser = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await API.post(
        "/auth/login",
        form
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (err) {

      console.log(err);

      alert("Invalid Credentials");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] p-5">

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 w-full max-w-md rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-300 text-center mb-8">
          Login to your SaaS dashboard
        </p>

        <form
          onSubmit={loginUser}
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
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-semibold transition"
          >
            {
              loading
                ? "Logging In..."
                : "Login"
            }
          </button>

        </form>

        <p className="text-center text-gray-300 mt-6">
          Don’t have an account?
        </p>

        <Link
          to="/register"
          className="block text-center text-indigo-400 font-semibold mt-2"
        >
          Create Account
        </Link>

      </div>
    </div>
  );
}