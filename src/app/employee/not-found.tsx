export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <div className="rounded-md w-96 bg-gray-50 p-4 md:p-6 shadow-md">
        <h2 className="text-xl font-semibold text-center">404 Not Found</h2>
        <p className="text-center p-8">
          Could not fetch employee list, check if{" "}
          <a
            href="https://dummy.restapiexample.com/"
            className=" text-blue-600 underline"
          >
            API
          </a>{" "}
          is working correctly
        </p>
      </div>
    </main>
  );
}
