import EmployeeService from "@/domain/services/employee.service";
import Breadcrumbs from "@/ui/BreadCrumbs";
import EditEmployeeForm from "@/ui/components/EditEmployeeForm.component";

export default async function EditEmployeePage({
  params,
}: {
  params: { id: string };
}) {
  const employee = await EmployeeService.getInstance().getEmployeeById({
    id: parseInt(params.id),
  });

  if (!employee) {
    return <div>Employee not found</div>;
  }
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Employees", href: "/employee" },
          { label: "Employees Details", href: `/employee/${params.id}` },
          {
            label: "Edit Employee",
            href: `/employee/${params.id}/edit`,
            active: true,
          },
        ]}
      />

      <EditEmployeeForm employee={{ ...employee }} />
    </div>
  );
}
