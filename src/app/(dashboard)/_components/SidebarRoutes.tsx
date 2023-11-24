"use client";
import { forAll, forTeacher } from "@/constants/routes";
import { teacherPath } from "@/constants/data";
import { usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";

const SidebarRoutes = () => {
  const urlPathName = usePathname();
  const isTeacherPath = urlPathName.endsWith(teacherPath);

  const routes = isTeacherPath ? forTeacher : forAll;

  return (
    <div>
      {routes.map((route) => (
        <SidebarItem key={route.href} {...route} />
      ))}
    </div>
  );
};

export default SidebarRoutes;
