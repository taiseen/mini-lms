import { Layout, Compass, List, LineChart } from "lucide-react";
import { TSidebarRoute } from "@/types";

export const forAll: TSidebarRoute[] = [
    { icon: Layout, label: "Dashboard", href: "/" },
    { icon: Compass, label: "Browse", href: "/search" },
];

export const forTeacher: TSidebarRoute[] = [
    { icon: List, label: "Courses", href: "/teacher/corses" },
    { icon: LineChart, label: "Analytics", href: "/teacher/analytics" },
];