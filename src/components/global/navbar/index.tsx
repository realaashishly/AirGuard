"use client";

import { format } from "date-fns";
import { CalendarDays, ChevronRight, Clock, MapPinHouse } from "lucide-react";
import { ModeToggle } from "../theme/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/app/(auth)/auth-client";

export default function Navbar() {
    const currentDate = new Date();
    const { data } = authClient.useSession();

    return (
        <nav className='flex flex-wrap items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800 gap-4'>
            {/* Location Section - Full width on mobile, auto on larger screens */}
            <div className='flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-start'>
                <div className='flex items-center gap-2 text-green-600 dark:text-green-400'>
                    <MapPinHouse className='w-5 h-5' />
                    <span className='text-sm font-medium hidden xs:inline'>
                        Current Location
                    </span>
                    <span className='text-sm font-medium xs:hidden'>
                        Location
                    </span>
                </div>
                <ChevronRight className='w-5 h-5' />
                <div className='text-zinc-700 dark:text-zinc-300 font-medium text-sm sm:text-base'>
                    Varanasi
                </div>
            </div>

            {/* Date/Time and Toggle Section - Wraps on small screens */}
            <div className='flex flex-wrap items-center justify-end gap-3 sm:gap-6 w-full sm:w-auto'>
                <div className='hidden lg:flex items-center gap-2 order-1 sm:order-none'>
                    <CalendarDays className='w-5 h-5 text-green-600 dark:text-green-400' />
                    <span className='text-sm text-zinc-700 dark:text-zinc-300 hidden sm:inline'>
                        {format(currentDate, "MMMM d, yyyy")}
                    </span>
                    <span className='text-sm text-zinc-700 dark:text-zinc-300 sm:hidden'>
                        {format(currentDate, "MMM d")}
                    </span>
                </div>

                <div className='hidden lg:flex items-center gap-2 order-2 sm:order-none'>
                    <Clock className='w-5 h-5 text-green-600 dark:text-green-400' />
                    <span className='text-sm text-zinc-700 dark:text-zinc-300'>
                        {format(currentDate, "h:mm a")}
                    </span>
                </div>

                <div className='hidden md:inline ml-2 order-last sm:order-none'>
                    <ModeToggle />
                </div>

                <Avatar className='order-3 sm:order-none'>
                    <AvatarImage src={data?.user.image as string} />
                    <AvatarFallback>AG</AvatarFallback>
                </Avatar>
            </div>
        </nav>
    );
}