import { getServerSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/global/sidebar";
import Navbar from "@/components/global/navbar";

type Props = {
    children: React.ReactNode;
    params: {
        slug: string;
    };
};

export default async function ProtectedLayout({ children, params }: Props) {
    const session = await getServerSession();

    if (!session?.user) {
        redirect(
            "/login?redirect=" + encodeURIComponent(`/dashboard/${params.slug}`)
        );
    }

    return (
        <div className='flex min-h-screen'>
            <Sidebar slug={params.slug} />
            <main className='flex-1 min-h-screen overflow-y-auto'>
                <Navbar />
                <div className="px-4">{children}</div>
            </main>
        </div>
    );
}
