import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {

  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-primary text-white p-3 rounded-xl shadow-lg"
      >
        ☰
      </button>

      {/* Overlay */}
      {
        mobileOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )
      }

      {/* Sidebar */}
      <div
        className={`
          fixed md:relative z-50
          h-screen bg-primary text-white
          transition-all duration-300
          flex flex-col
          shadow-2xl

          ${open ? "w-72" : "w-24"}

          ${mobileOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
          }
        `}
      >

        {/* Top */}
        <div className="flex items-center justify-between p-5 border-b border-white/20">

          {
            open && (
              <h1 className="text-3xl font-bold">
                Phone SaaS
              </h1>
            )
          }

          <button
            onClick={() => setOpen(!open)}
            className="bg-white/20 hover:bg-white/30 p-2 rounded-xl"
          >
            {
              open ? "◀" : "▶"
            }
          </button>

        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-3">

          <Link
            to="/dashboard"
            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-secondary transition"
          >

            <span className="text-2xl">
              📊
            </span>

            {
              open && (
                <span>
                  Dashboard
                </span>
              )
            }

          </Link>

          <Link
            to="/add"
            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-secondary transition"
          >

            <span className="text-2xl">
              ➕
            </span>

            {
              open && (
                <span>
                  Add Contact
                </span>
              )
            }

          </Link>

        </nav>

      </div>
    </>
  );
}