import EmployeeService from "@/domain/services/employee.service";
import Breadcrumbs from "@/ui/BreadCrumbs";
import EmployeeCard from "@/ui/components/EmployeeCard.component";
import { notFound } from "next/navigation";

export default async function EditEmployeePage({
  params,
}: {
  params: { id: string };
}) {
  // TODO Implement employee details page and delete feature
  const employee = await EmployeeService.getInstance().getEmployeeById({
    id: parseInt(params.id),
  });

  if (!employee) {
    notFound();
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Employees", href: "/employee" },
          {
            label: "Employee Details",
            href: `/employee/${params.id}`,
            active: true,
          },
        ]}
      />
      {employee && (
        <div className="flex flex-col">
          <EmployeeCard employee={{ ...employee }} />
        </div>
      )}
    </div>
  );
}
