import EmployeeFormatter from "@/core/formatters/employee.formatter";
import { EmployeeModel } from "@/domain/models/employee.model";
import Link from "next/link";
import { DeleteEmployeeButton, UpdateEmployeeButton } from "../Buttons";

type Props = {
  employee: EmployeeModel;
  style: string;
};

const EmployeeRow = ({ employee, style }: Props) => {
  return (
    <tr
      key={employee.id}
      className={`${style} w-full text-sm m-4 hover:shadow-md hover:bg-stone-200`}
    >
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <p>{employee.id}</p>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <Link href={`/employee/${employee.id}`} scroll={false}>
          <p>{employee.employee_name}</p>
        </Link>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <p>{EmployeeFormatter.formatSalary(employee.employee_salary)}</p>
      </td>
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <UpdateEmployeeButton id={employee.id.toString()} />
          <DeleteEmployeeButton id={employee.id.toString()} />
        </div>
      </td>
    </tr>
  );
};

export default EmployeeRow;
