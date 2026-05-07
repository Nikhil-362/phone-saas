export default function Topbar() {

  return (
    <div className="bg-white/70 backdrop-blur-lg border-b border-gray-200 px-6 py-4 flex justify-between shadow-sm">

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        className="hidden md:block w-72 p-3 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary"
      />

      {/* User */}
      <div className="ml-auto flex items-center gap-4">

        <div className="hidden sm:block text-right">

          <h3 className="font-semibold text-gray-700">
            Nikhil
          </h3>

          <p className="text-sm text-gray-500">
            Admin
          </p>

        </div>

        <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
          N
        </div>

      </div>

    </div>
  );
}