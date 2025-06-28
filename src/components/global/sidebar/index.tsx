"use client";

import { SIDEBARMENU } from "@/contants";
import { usePaths } from "@/hooks/use-nav";
import Link from "next/link";
import { Settings } from "lucide-react"; // Import an icon for settings
import { cn } from "@/lib/utils";

type Props = {
    slug: string;
};

export default function Sidebar({ slug }: Props) {
    const { pathname } = usePaths(); // Custom hook to get current pathname

    console.log("Sidebar rendered with slug:", slug); // Log the slug for debugging
    console.log("Current pathname:", pathname); // Log the current pathname for debugging

    // Settings menu item

    return (
        <div className='flex flex-col w-64 h-screen bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 p-4'>
            <h2 className='text-xl font-semibold mb-6 px-2 text-zinc-800 dark:text-zinc-200'>
                AIRGUARD
            </h2>

            <nav className='space-y-1 flex-1'>
                {SIDEBARMENU.map((item, idx) => {
                    const fullHref = item.href.startsWith("/")
                        ? item.href
                        : `/${slug}/${item.href}`;

                    const isActive = pathname === fullHref;

                    const Icon = item.icon;

                    return (
                        <Link
                            href={fullHref}
                            key={idx}
                            className='block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 rounded-xs transition-all'
                        >
                            <div
                                className={`flex items-center gap-3 p-3 rounded-xs transition-colors ${
                                    isActive
                                        ? "bg-green-100 dark:bg-green-500/10"
                                        : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                }`}
                            >
                                {Icon && (
                                    <Icon
                                        className={`w-5 h-5 ${
                                            isActive
                                                ? "text-green-600 dark:text-green-400"
                                                : "text-zinc-500 dark:text-zinc-400"
                                        }`}
                                    />
                                )}
                                <span
                                    className={`text-sm font-medium ${
                                        isActive
                                            ? "text-green-700 dark:text-green-300"
                                            : "text-zinc-700 dark:text-zinc-300"
                                    }`}
                                >
                                    {item.title}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* Settings link at the bottom */}
            <div className='mt-auto pt-4 border-t border-gray-200 dark:border-zinc-800'>
                <Link
                    href={`/${slug}/settings`}
                    className='block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 rounded-xs transition-all'
                >
                    <div
                        className={`flex items-center gap-3 p-3 rounded-xs transition-colors`}
                    >
                        <Settings
                            className={cn(
                                "w-5 h-5",
                                pathname === "/settings"
                                    ? "text-green-600 dark:text-green-400"
                                    : "text-zinc-500 dark:text-zinc-400"
                            )}
                        />
                        <span
                            className={cn(
                                "text-sm font-medium",
                                pathname === "/settings"
                                    ? "text-green-600 dark:text-green-400"
                                    : "text-zinc-500 dark:text-zinc-400"
                            )}
                        >
                            Settings
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
