"use client";
import { State, updateEmployeeById } from "@/app/lib/actions";
import { EmployeeModel } from "@/domain/models/employee.model";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "sonner";
import { SubmitButton } from "../Buttons";
// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";

export default function EditEmployeeForm({
  employee,
}: {
  employee: EmployeeModel;
}) {
  const initialState = { type: "default", message: "", errors: {} } as State;
  const updateEmployee = updateEmployeeById.bind(null, employee.id.toString());
  const [state, dispatch] = useFormState(updateEmployee, initialState);

  useEffect(() => {
    if (state.type === "success") {
      toast.success(state.message);
    } else if (state.type === "error") {
      toast.error(state.message);
    }

    state.type = initialState.type;
  }, [initialState.type, state]);
  return (
    <div className="rounded-md w-full bg-gray-50 p-4 md:p-6">
      <form action={dispatch}>
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
                className="block w-full rounded-md border py-2 pl-5 text-sm outline-2 placeholder:text-gray-500 disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
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
          
                focus:invalid:border-pink-500 ${
                  state?.errors?.employee_name
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                aria-describedby="employee_name-error"
                required
                min="1"
              />
            </div>
          </div>
          <div id="employee_name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.employee_name &&
              state.errors.employee_name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
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
                focus:invalid:border-pink-500 ${
                  state?.errors?.employee_salary
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                aria-describedby="employee_salary-error"
                required
              />
            </div>
          </div>
          <div id="employee_salary-error" aria-live="polite" aria-atomic="true">
            {state.errors?.employee_salary &&
              state.errors.employee_salary.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href={`/employee/${employee.id}`}
            scroll={false}
            className="flex h-10 items-center rounded-lg bg-gray-200 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-300"
          >
            Cancel
          </Link>
          <SubmitButton title="Save" />
        </div>
      </form>
    </div>
  );
}
