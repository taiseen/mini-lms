import SidebarRoutes from "./SidebarRoutes";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col border-r overflow-auto bg-white">
      <div className="p-4 flex items-center justify-center">
        <Logo />
      </div>

      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
