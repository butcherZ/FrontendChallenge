"use client";
import { createEmployee, State } from "@/app/lib/actions";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "sonner";
import { SubmitButton } from "../Buttons";
// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";

export default function CreateEmployeeForm() {
  const initialState = { type: "default", message: "", errors: {} } as State;
  const [state, dispatch] = useFormState(createEmployee, initialState);

  //TODO add client side validation to avoid sending bad requests to server
  console.log("state is", state);

  useEffect(() => {
    if (state.type === "success") {
      toast.success(state.message);
    } else if (state.type === "error") {
      toast.error(state.message);
    }

    state.type = initialState.type;
  }, [initialState.type, state]);
  return (
    <div className="rounded-md w-full bg-gray-50 p-4 md:p-6 shadow-md">
      <form action={dispatch}>
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
                placeholder="Enter Employee's name"
                className={`peer block w-full rounded-md border py-2 pl-5 text-sm outline-2 placeholder:text-gray-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          
                focus:invalid:border-pink-500 ${
                  state?.errors?.employee_name
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                aria-describedby="employee_name-error"
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
                placeholder="Enter Employee's salary"
                className={`peer block w-full rounded-md border py-2 pl-5 text-sm outline-2 placeholder:text-gray-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                focus:invalid:border-pink-500 ${
                  state?.errors?.employee_salary
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                aria-describedby="employee_salary-error"
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
            href="/employee"
            scroll={false}
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <SubmitButton title="Save" />
        </div>
      </form>
    </div>
  );
}
