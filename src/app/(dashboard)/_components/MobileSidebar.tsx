import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition-all hover:text-red-500 ">
        <Menu size={28}/>
      </SheetTrigger>

      <SheetContent side={"left"} className="p-0 w-64">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
