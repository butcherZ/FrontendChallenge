const EmployeeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex justify-center">
      <main className="w-3/4 h-auto flex flex-col items-center justify-center p-4">
        {children}
      </main>
    </div>
  );
};
export default EmployeeLayout;
