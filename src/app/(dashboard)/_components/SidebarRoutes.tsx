"use client";
import routes, { forAll, forTeacher } from "@/constants/routes";
import { usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";

const SidebarRoutes = () => {
  const urlPathName = usePathname();
  const isTeacherPath = urlPathName.includes(routes.teacherPage);

  const navigationRoutes = isTeacherPath ? forTeacher : forAll;

  return (
    <div>
      {navigationRoutes.map((route) => (
        <SidebarItem key={route.href} {...route} />
      ))}
    </div>
  );
};

export default SidebarRoutes;
