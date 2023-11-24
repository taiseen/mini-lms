"use client";
import { GraduationCap, LogOut } from "lucide-react";
import { teacherPath } from "@/constants/data";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const TopNavbarRoute = () => {
  const urlPathName = usePathname();
  const isTeacherPath = urlPathName.endsWith(teacherPath);

  return (
    <div className="ml-auto flex items-center gap-4 text-black">
      {isTeacherPath ? (
        <Link
          href="/"
          className="px-3 py-1 rounded bg-red-400 flex items-center gap-2"
        >
          <LogOut size={16} /> Exit
        </Link>
      ) : (
        <Link
          href={teacherPath}
          className="px-3 py-1 rounded bg-green-400 flex items-center gap-2"
        >
          <GraduationCap size={16} />
          Teacher
        </Link>
      )}

      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default TopNavbarRoute;
