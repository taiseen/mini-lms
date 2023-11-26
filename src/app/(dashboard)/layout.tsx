import TopNavbar from "./_components/TopNavbar";
import Sidebar from "./_components/Sidebar";
import { LayoutType } from "@/types";

const DashboardLayout = ({ children }: LayoutType) => {
  return (
    <main className="">
      <nav className="fixed w-full h-20 md:pl-60 inset-y-0 z-50">
        <TopNavbar />
      </nav>

      <aside className="hidden md:flex flex-col w-60 fixed h-screen z-50 inset-y-0">
        <Sidebar />
      </aside>

      <div className="md:ml-60 mt-20 bg-red-200">{children}</div>
    </main>
  );
};

export default DashboardLayout;
