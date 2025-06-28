// loading.tsx
export default function Loading() {
    return (
        <main>
            <div className='flex items-center justify-center h-screen w-full gap-4'>
                <div className='animate-pulse bg-gray-200 rounded-md h-10 w-24'></div>
                <div className='animate-pulse bg-gray-100 rounded-md h-10 w-24 border border-gray-200'></div>
            </div>
        </main>
    );
}
