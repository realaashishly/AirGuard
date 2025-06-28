"use client"

import * as React from "react"
import { Moon, Sun, Monitor, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const currentThemeName = theme
        ? `${theme.charAt(0).toUpperCase() + theme.slice(1)} Mode`
        : "System Mode";

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='ghost' // Changed from 'outline' to 'ghost' for transparent background
                    className='flex items-center gap-2 px-3 hover:bg-transparent dark:hover:bg-transparent cursor-pointer'
                >
                    <div className='relative h-4 w-4'>
                        <Sun className='absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-green-600 dark:text-green-400' />
                        <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-green-600 dark:text-green-400' />
                    </div>
                    <span className='text-zinc-700 dark:text-zinc-300'>
                        {currentThemeName}
                    </span>
                    <ChevronDown className='h-4 w-4 text-zinc-700 dark:text-zinc-300 transition-transform duration-200 data-[state=open]:rotate-180' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align='end'
                className='w-[150px] border-green-200 dark:border-green-800 bg-white dark:bg-zinc-900'
            >
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    className='flex items-center gap-2 focus:bg-green-100 dark:focus:bg-green-900/50'
                >
                    <Sun className='h-4 w-4 text-green-600 dark:text-green-400' />
                    <span className=' dark:text-green-300'>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    className='flex items-center gap-2 focus:bg-green-100 dark:focus:bg-green-900/50'
                >
                    <Moon className='h-4 w-4 text-green-600 dark:text-green-400' />
                    <span className=' dark:text-green-300'>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    className='flex items-center gap-2 focus:bg-green-100 dark:focus:bg-green-900/50'
                >
                    <Monitor className='h-4 w-4 text-green-600 dark:text-green-400' />
                    <span className=' dark:text-green-300'>System</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}