"use client";

import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPage: number;
};

const PaginationControls = ({ hasNextPage, hasPrevPage, totalPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "10";

  return (
    <div className="flex w-full justify-between items-center mt-6">
      <button
        className="bg-white rounded-md shadow-md p-2 hover:bg-stone-200 disabled:bg-gray-200"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(
            `/employee?page=${Number(page) - 1}&per_page=${per_page}`,
            {
              scroll: false,
            }
          );
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <span className="sr-only">Previous Page</span>
      </button>

      <div className="rounded-md bg-white shadow-md px-4 py-2">
        {page} of {totalPage}
      </div>

      <button
        className="rounded-md bg-white shadow-md p-2  hover:bg-stone-200 disabled:bg-gray-200"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(
            `/employee?page=${Number(page) + 1}&per_page=${per_page}`,
            {
              scroll: false,
            }
          );
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        <span className="sr-only">Next page</span>
      </button>
    </div>
  );
};

export default PaginationControls;
