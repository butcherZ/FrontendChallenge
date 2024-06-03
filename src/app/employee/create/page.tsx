import Breadcrumbs from "@/ui/BreadCrumbs";
import CreateEmployeeForm from "@/ui/components/CreateEmployeeForm.component";

export default function CreateEmployeePage() {
  // TODO Implement create employee page
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Employees", href: "/employee" },
          {
            label: "Create Employee",
            href: "/employee/create",
            active: true,
          },
        ]}
      />
      <CreateEmployeeForm />
    </div>
  );
}
