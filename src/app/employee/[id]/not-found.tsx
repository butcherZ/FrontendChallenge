import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <div className="rounded-md w-96 bg-gray-50 p-4 md:p-6 shadow-md">
        <h2 className="text-xl font-semibold text-center">404 Not Found</h2>
        <p className="text-center p-8">Employee does not exists</p>
      </div>
      <Link
        href="/employee"
        className="rounded-md p-4 m-8 text-gray-900 bg-tone hover:shadow-lg hover:shadow-tone/50"
      >
        Go Back to Employees page
      </Link>
    </main>
  );
}
