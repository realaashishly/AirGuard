"use client";
import { Button } from "@/components/ui/button";
import { signinGoogle } from "./(auth)/auth-client";

export default function Home() {
    return (
        <main>
            <div className='flex items-center justify-center h-screen w-full gap-4'>
                <Button onClick={signinGoogle}>Sign up</Button>

                <Button variant='outline' onClick={signinGoogle}>
                    Login
                </Button>
            </div>
        </main>
    );
}
