import EmployeeService from "@/domain/services/employee.service";
import EmployeeRow from "@/ui/components/EmployeeRow.component";
import PaginationControls from "@/ui/Pagination";
import { notFound } from "next/navigation";

const EmployeeTable = async ({
  page,
  per_page,
}: {
  page: number;
  per_page: number;
}) => {
  const data = await EmployeeService.getInstance().getEmployeeList();
  const start = (page - 1) * per_page;
  const end = start + per_page;
  const entries = data?.slice(start, end);

  if (!data || !entries) {
    notFound();
  }

  const totalEntries = data.length;
  const totalPage = Math.ceil(totalEntries / per_page);

  return (
    <>
      <div className="min-w-full overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full text-gray-900 md:table">
          <thead
            className={`text-left text-sm font-bold text-black bg-[#cecee4] rounded-t-lg`}
          >
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                ID
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Name
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Salary
              </th>
              <th scope="col" className="px-3 py-5 text-right font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white rounded-b-lg">
            {entries.map((entry, index) => (
              <EmployeeRow
                style={index % 2 ? `bg-white` : `bg-gray-100`}
                key={entry.id}
                employee={entry}
              />
            ))}
          </tbody>
        </table>
      </div>

      <PaginationControls
        hasNextPage={end < totalEntries}
        hasPrevPage={start > 0}
        totalPage={totalPage}
      />
    </>
  );
};

export default EmployeeTable;
