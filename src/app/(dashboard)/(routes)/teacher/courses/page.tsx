import routes from "@/constants/routes";
import Link from "next/link";

const CoursesPage = () => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <Link
        href={routes.courseCreatePage}
        className="btn bg-green-600 rounded w-fit text-slate-100 hover:bg-green-700 transition-all"
      >
        Create Courses
      </Link>
    </div>
  );
};

export default CoursesPage;
