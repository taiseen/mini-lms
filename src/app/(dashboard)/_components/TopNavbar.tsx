import TopNavbarRoute from "@/components/TopNavbarRoute";
import MobileSidebar from "./MobileSidebar";

const TopNavbar = () => {
  return (
    <div className="p-4 h-full flex items-center border-b shadow-sm bg-white">
      <MobileSidebar />

      <div className="text-xl text-slate-700 font-bold">
        Learning Management System
      </div>

      <TopNavbarRoute />
    </div>
  );
};

export default TopNavbar;
