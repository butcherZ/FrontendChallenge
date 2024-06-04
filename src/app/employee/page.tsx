import { CreateEmployeeButton } from "@/ui/Buttons";
import EmployeeTable from "@/ui/components/EmployeeTable.component";
import EmployeeSkeleton from "@/ui/skeletons/EmployeeSkeleton";
import { Suspense } from "react";

export default function EmployeePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams["page"] ?? "1");
  const per_page = Number(searchParams["per_page"] ?? "10");

  return (
    <>
      <div className="flex w-full items-center justify-between my-6 sticky z-10">
        <h1 className="text-3xl">Employees</h1>
        <CreateEmployeeButton />
      </div>

      <div className="flex-grow w-full overflow-auto">
        <Suspense fallback={<EmployeeSkeleton />}>
          <EmployeeTable page={page} per_page={per_page} />
        </Suspense>
      </div>
    </>
  );
}
