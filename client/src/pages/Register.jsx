import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Register User
  const registerUser = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      await axios.post(
        "http://localhost:5000/register",
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        {/* Title */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Create Account
          </h1>

          <p className="text-gray-500">
            Register to manage your phone contacts
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={registerUser}
          className="space-y-5"
        >

          {/* Email */}
          <div>

            <label className="block mb-2 text-gray-700 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              required
            />

          </div>

          {/* Password */}
          <div>

            <label className="block mb-2 text-gray-700 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              required
            />

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-4 rounded-xl font-semibold"
          >
            {
              loading
                ? "Creating Account..."
                : "Register"
            }
          </button>

        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">

          <p className="text-gray-600">
            Already have an account?
          </p>

          <Link
            to="/"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login Here
          </Link>

        </div>

      </div>
    </div>
  );
}