import { EmployeeModel } from "@/domain/models/employee.model";
import Link from "next/link";
import { ReactNode } from "react";
import { DeleteEmployeeButton } from "../Buttons";

export interface EmployeeCardProps {
  employee: EmployeeModel;
}

const EmployeeCard = ({ employee }: EmployeeCardProps): ReactNode => {
  return (
    <div className="rounded-md w-full bg-gray-50 p-4 md:p-6">
      <div className="mb-4">
        <label htmlFor="id" className="mb-2 block text-sm font-medium">
          ID
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="id"
              name="id"
              type="text"
              defaultValue={employee.id}
              className="peer block w-full rounded-md border py-2 pl-5 text-sm outline-2 placeholder:text-gray-500 disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="employee_name"
          className="mb-2 block text-sm font-medium"
        >
          Name
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="employee_name"
              name="employee_name"
              type="text"
              defaultValue={employee.employee_name}
              placeholder="Enter Employee's name"
              className={`peer block w-full rounded-md border py-2 pl-5 text-sm outline-2 placeholder:text-gray-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    
              }`}
              disabled
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="employee_salary"
          className="mb-2 block text-sm font-medium"
        >
          Salary
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="employee_salary"
              name="employee_salary"
              type="number"
              defaultValue={employee.employee_salary}
              placeholder="Enter Employee's salary"
              className={`peer block w-full rounded-md border py-2 pl-5 text-sm outline-2 placeholder:text-gray-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
           `}
              disabled
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          scroll={false}
          className="rounded-md p-2 bg-tone hover:shadow-lg hover:shadow-tone/50"
          href={`/employee/${employee?.id}/edit`}
        >
          <span className="text-md px-2 text-gray-900">Edit</span>
        </Link>
        <DeleteEmployeeButton id={employee?.id.toString()} />
      </div>
    </div>
  );
};
export default EmployeeCard;
