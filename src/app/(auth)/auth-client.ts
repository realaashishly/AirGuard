import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL,
});

export const signinGoogle = async () => {
    const data = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
    })

    return data;
};

// export const { data } = authClient.useSession();

export const { signIn, signOut, useSession } = authClient;
