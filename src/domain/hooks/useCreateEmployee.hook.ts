import { useMutation } from "@tanstack/react-query";
import { EmployeeModel } from "../models/employee.model";
import EmployeeService from "../services/employee.service";

const service = EmployeeService.getInstance();

export const useCreateEmployee = () => {
  return useMutation<EmployeeModel | undefined, Error, unknown>({
    mutationFn: (params: unknown) => service.createEmployee(params),
  });
};
