"use server";
import EmployeeService from "@/domain/services/employee.service";
import { revalidateTag } from "next/cache";
import { CreateEmployeeFormSchema } from "./schema";

export type State = {
  type: "default" | "loading" | "success" | "error";
  errors?: {
    employee_name?: string[];
    employee_salary?: string[];
  };
  message?: string | null;
};

const CreateEmployee = CreateEmployeeFormSchema.omit({ id: true });
const UpdateEmployee = CreateEmployeeFormSchema;

export async function createEmployee(prevState: State, formData: FormData) {
  const validatedFields = CreateEmployee.safeParse({
    employee_name: formData.get("employee_name"),
    employee_salary: formData.get("employee_salary"),
  });

  //TODO the await here  is used to test form pending status, remove in production
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!validatedFields.success) {
    return {
      type: "error",
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields. Failed to Create Employee.",
    };
  }
  try {
    await EmployeeService.getInstance().createEmployee({
      employee_name: validatedFields.data.employee_name,
      employee_salary: validatedFields.data.employee_salary,
    });
    revalidateTag("employee-list");
    return { type: "success", message: "Created new employee" } as State;
  } catch (error) {
    return {
      type: "error",
      error: "SERVER::Failed to Create Employee.",
    } as State;
  }
}

export async function updateEmployeeById(
  id: string,
  prevState: State,
  formData: FormData
) {
  const validatedFields = UpdateEmployee.safeParse({
    id,
    employee_name: formData.get("employee_name"),
    employee_salary: formData.get("employee_salary"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields. Failed to Update Employee.",
    };
  }
  try {
    await EmployeeService.getInstance().updateEmployeeById({
      id,
      employee_name: validatedFields.data.employee_name,
      employee_salary: validatedFields.data.employee_salary,
    });

    revalidateTag("employee-list");
    revalidateTag("employee-id");

    return { type: "success", message: `Updated Employee` } as State;
  } catch (error) {
    return {
      type: "error",
      error: `SERVER::Failed to update employee with ${id}`,
    };
  }
}

export async function deleteEmployeeById(id: string) {
  try {
    await EmployeeService.getInstance().deleteEmployeeById({
      id,
    });
    revalidateTag("employee-list");
    return {
      type: "success",
      message: `employee with id: ${id} has been deleted`,
    };
  } catch (error) {
    return { error: `Failed to delete employee with id ${id}` };
  }
}
