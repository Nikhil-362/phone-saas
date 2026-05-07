import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {

  return (
    <div className="flex min-h-screen bg-background">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Topbar */}
        <Topbar />

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">

          {children}

        </main>

      </div>

    </div>
  );
}