import EmployeeDatasourceContract from "@/domain/contracts/employeeDatasource.contract";
import {
  EmployeeListModel,
  EmployeeModel,
  EmployeeSchema,
} from "@/domain/models/employee.model";
import { GetEmployeeByIdParams } from "@/domain/params/employee.param";

//TODO change id to number after testing
export default class EmployeeDatasource extends EmployeeDatasourceContract {
  public async getEmployeeList(): Promise<EmployeeListModel | undefined> {
    try {
      //TODO the await here  is used to test streaming, remove in production
      // await new Promise((resolve) => setTimeout(resolve, 10000));
      const response = await fetch("http://localhost:3500/employees", {
        next: { tags: ["employee-list"] },
      });

      //TODO Validate response
      // if (response.status !== 200) {
      //   return undefined;
      // }

      // Obtain json from response
      const json = await response.json();
      // Extract data
      const data = json;
      //const data = json["data"];
      return data;
      //return EmployeeListSchema.parse(data);
    } catch (error) {
      return undefined;
    }
  }

  public async createEmployee(
    params: EmployeeModel
  ): Promise<EmployeeModel | undefined> {
    try {
      const response = await fetch("http://localhost:3500/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...params,
          //TODO remove tostring(), id needs to be a number in api, put string for test with json-server
          id: Math.floor(Math.random() * 1000).toString(),
        }),
      });

      //TODO  Validate response
      if (response.status !== 200) {
        return undefined;
      }

      // Obtain json from response
      const json = await response.json();
      // Extract data
      const data = json["data"];
      return EmployeeSchema.parse(data);
    } catch (exception) {
      return undefined;
    }
  }

  public async getEmployeeById(
    params: GetEmployeeByIdParams
  ): Promise<EmployeeModel | undefined> {
    try {
      const response = await fetch(
        `http://localhost:3500/employees/${params.id}`,
        //   `https://dummy.restapiexample.com/api/v1/employee/${params.id}`
        {
          next: { tags: ["employee-id"] },
        }
      );

      //TODO Validate response
      // if (response.status !== 200) {
      //   return undefined;
      // }

      // Obtain json from response
      const json = await response.json();
      // Extract data
      // const data = json["data"];
      const data = json;
      //   data.id = parseInt(data.id);
      return data;
      // return CreateEmployeeFormSchema.parse(data);
    } catch (error) {
      return undefined;
    }
  }

  public async updateEmployeeById(
    params: unknown
  ): Promise<EmployeeModel | undefined> {
    try {
      const response = await fetch(
        `http://localhost:3500/employees/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        }
      );
      //TODO  Validate response
      if (response.status !== 200) {
        return undefined;
      }

      // Obtain json from response
      const json = await response.json();
      // Extract data
      const data = json["data"];

      return EmployeeSchema.parse(data);
    } catch (exception) {
      return undefined;
    }
  }

  public async deleteEmployeeById(
    params: unknown
  ): Promise<EmployeeModel | undefined> {
    try {
      const response = await fetch(
        `http://localhost:3500/employees/${params.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //TODO  Validate response
      // if (response.status !== 200) {
      //   return undefined;
      // }

      // Obtain json from response
      const json = await response.json();
      // Extract data
      const data = json["data"];

      return data;
    } catch (error) {
      return undefined;
    }
  }
}
