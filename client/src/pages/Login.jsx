import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    // const res = await axios.post(
    //   "http://localhost:5173/login",
    //   data
    // );

    // localStorage.setItem("token", res.data.token);

    nav("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Login
        </h2>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="input"
            onChange={(e)=>
              setData({
                ...data,
                email: e.target.value
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="input"
            onChange={(e)=>
              setData({
                ...data,
                password: e.target.value
              })
            }
          />

          <button onClick={login} className="btn w-full">
            Login
          </button>

          <Link
            to="/register"
            className="text-indigo-600 block text-center"
          >
            Create Account
          </Link>

        </div>
      </div>
    </div>
  );
}