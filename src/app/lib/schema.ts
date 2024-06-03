import { z } from "zod";

export const CreateEmployeeFormSchema = z.object({
  id: z.coerce.number().positive(),
  employee_name: z.string({}).min(1),
  employee_salary: z.coerce.number().positive({
    message: "Salary must be a number greater than 0.",
  }),
});
