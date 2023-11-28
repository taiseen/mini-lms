"use client";
import { GraduationCap, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import routes from "@/constants/routes";
import Link from "next/link";

const TopNavbarRoute = () => {
  const urlPathName = usePathname();
  const isTeacherPath = urlPathName.includes(routes.teacherPage);

  return (
    <div className="ml-auto flex items-center gap-4 text-black">
      {isTeacherPath ? (
        <Link
          href={routes.root}
          className="btn bg-red-400 flex items-center gap-2"
        >
          <LogOut size={16} /> Exit
        </Link>
      ) : (
        <Link
          href={routes.teacherPage}
          className="btn bg-green-400 flex items-center gap-2"
        >
          <GraduationCap size={16} />
          Teacher
        </Link>
      )}

      <UserButton afterSignOutUrl={routes.root} />
    </div>
  );
};

export default TopNavbarRoute;
