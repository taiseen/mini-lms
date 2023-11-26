import { Layout, Compass, List, LineChart } from "lucide-react";
import { TSidebarRoute } from "@/types";

const routes = {
    root: '/',
    searchPage: '/search',
    teacherPage: '/teacher',
    teacherCoursesPage: '/teacher/courses',
    teacherAnalyticsPage: '/teacher/analytics',
    courseCreatePage: '/teacher/create',
}

export const forAll: TSidebarRoute[] = [
    { icon: Layout, label: "Dashboard", href: routes.root },
    { icon: Compass, label: "Browse", href: routes.searchPage },
];

export const forTeacher: TSidebarRoute[] = [
    { icon: List, label: "Courses", href: routes.teacherCoursesPage },
    { icon: LineChart, label: "Analytics", href: routes.teacherAnalyticsPage },
];

export default routes;