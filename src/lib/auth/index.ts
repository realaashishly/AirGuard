import { authClient } from "@/app/(auth)/auth-client";
import { headers } from "next/headers";

export const getServerSession = async () => {
    const { data } = await authClient.getSession({
        fetchOptions: {
            headers: await headers(),
        },
    });
    return data;
};
