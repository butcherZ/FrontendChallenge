import EmployeeDatasourceContract from "@/domain/contracts/employeeDatasource.contract";
import {
  EmployeeListModel,
  EmployeeModel,
} from "@/domain/models/employee.model";
import { GetEmployeeByIdParams } from "@/domain/params/employee.param";
import EmployeeService from "@/domain/services/employee.service";

class MockEmployeeDatasource implements EmployeeDatasourceContract {
  getEmployeeList(): Promise<EmployeeListModel | undefined> {
    return Promise.resolve([
      { id: 1, employee_name: "ziyi", employee_salary: 50000 },
      { id: 2, employee_name: "toto", employee_salary: 60000 },
    ]);
  }

  createEmployee(params: unknown): Promise<EmployeeModel | undefined> {
    return Promise.resolve({
      id: 3,
      employee_name: "New Employee",
      employee_salary: 70000,
    });
  }

  getEmployeeById(
    params: GetEmployeeByIdParams
  ): Promise<EmployeeModel | undefined> {
    if (params.id === 1) {
      return Promise.resolve({
        id: 1,
        employee_name: "ziyi",
        employee_salary: 50000,
      });
    }
    return Promise.resolve(undefined);
  }

  updateEmployeeById(params: unknown): Promise<EmployeeModel | undefined> {
    if ((params as any).id === 1) {
      return Promise.resolve({
        id: 1,
        employee_name: "Updated Employee",
        employee_salary: 50000,
      });
    }
    return Promise.resolve(undefined);
  }

  deleteEmployeeById(params: unknown): Promise<EmployeeModel | undefined> {
    if ((params as any).id === 1) {
      return Promise.resolve({
        id: 1,
        employee_name: "Deleted Employee",
        employee_salary: 50000,
      });
    }
    return Promise.resolve(undefined);
  }
}

describe("EmployeeService", () => {
  let service: EmployeeService;

  beforeEach(() => {
    const mockDatasource = new MockEmployeeDatasource();
    EmployeeService.setDatasourceForTesting(mockDatasource); // Use the static method to set the mock datasource
    service = EmployeeService.getInstance(); // Ensure the service uses the mock datasource
  });

  test("should fetch employee list", async () => {
    const employees = await service.getEmployeeList();
    expect(employees).toEqual([
      { id: 1, employee_name: "ziyi", employee_salary: 50000 },
      { id: 2, employee_name: "toto", employee_salary: 60000 },
    ]);
  });
});
