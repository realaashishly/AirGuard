"use client";
import { Button } from "@/components/ui/button";
import { signinGoogle } from "./(auth)/auth-client";
import { useState } from "react";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = async () => {
        setIsLoading(true);
        try {
            await signinGoogle();
            console.log("logging data while loading: ");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main>
            <div className='flex items-center justify-center h-screen w-full gap-4'>
                <Button onClick={handleSignIn} disabled={isLoading}>
                    {isLoading ? "Loading..." : "Sign up"}
                </Button>
                <Button
                    variant='outline'
                    onClick={handleSignIn}
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : "Login"}
                </Button>
            </div>
        </main>
    );
}