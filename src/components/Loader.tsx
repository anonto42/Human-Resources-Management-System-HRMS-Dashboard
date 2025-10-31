
export default function Loader() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <div className="animate-spin h-14 w-14 border-t-4 border-blue-500 rounded-full mb-4"></div>
            <p className="text-gray-400">Loading...</p>
        </div>
    );
}
