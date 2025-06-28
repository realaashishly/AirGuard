import { SidebarMenuItem } from "@/types";
import {
    Bell,
    HeartPulse,
    LayoutDashboard,
    Map,
    MapPin,
    TrendingUp,
} from "lucide-react";
import { v4 as uuid } from "uuid";

export const SIDEBARMENU: SidebarMenuItem[] = [
    {
        id: uuid(),
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        id: uuid(),
        title: "Map View",
        href: "/map",
        icon: Map,
    },
    {
        id: uuid(),
        title: "My Locations",
        href: "/my-locations",
        icon: MapPin,
    },
    {
        id: uuid(),
        title: "Trends & Forecast",
        href: "/trends-and-forecast",
        icon: TrendingUp,
    },
    {
        id: uuid(),
        title: "Health Tips",
        href: "/health-and-tips",
        icon: HeartPulse,
    },
    {
        id: uuid(),
        title: "Alerts",
        href: "/alerts",
        icon: Bell,
    },
];
