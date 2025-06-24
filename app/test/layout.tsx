export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Test Page</h1>
        <div className="bg-white p-6 rounded shadow-md w-full max-w-2xl">
            {children}
        </div>
        </div>
    );
    }