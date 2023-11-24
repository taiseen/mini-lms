"use client";
import { usePathname, useRouter } from "next/navigation";
import { TSidebarRoute } from "@/types";
import { cn } from "@/lib/utils";

const SidebarItem = ({ icon: Icon, label, href }: TSidebarRoute) => {
  const urlPathName = usePathname(); // get url path
  const navigation = useRouter(); // for going to that path...

  const handleSidebarItemClick = () => navigation.push(href);

  const isActiveLink = urlPathName === href;

  return (
    <div
      onClick={handleSidebarItemClick}
      className={cn(
        "flex items-center gap-x-3 px-2 py-3 pl-4 cursor-pointer hover:bg-slate-200/50 transition-all duration-200 relative",
        isActiveLink && "text-sky-700 bg-slate-200"
      )}
    >
      <Icon /> {label}
      <div
        className={cn(
          "absolute top-0 right-0 opacity-0 border-r-2 border-sky-700 h-full transition-all",
          isActiveLink && "opacity-100"
        )}
      />
    </div>
  );
};

export default SidebarItem;
