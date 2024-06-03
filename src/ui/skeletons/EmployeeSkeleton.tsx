const EmployeeSkeleton = () => {
  return (
    <div className="min-w-full overflow-hidden rounded-lg shadow-md">
      <table className="min-w-full text-gray-900 md:table">
        <thead
          className={`text-left text-sm font-bold text-black bg-[#cecee4] rounded-t-lg`}
        >
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              ID
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Name
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Salary
            </th>
            <th scope="col" className="px-3 py-5 text-right font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white rounded-b-lg">
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index} className="w-full text-sm m-4">
              <td className="whitespace-nowrap py-6 pl-6 pr-3">
                <div className="flex items-center justify-between animate-pulse">
                  <div className="h-2.5 bg-gray-200 rounded-full w-12 mb-2.5"></div>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-3">
                <div className="flex items-center justify-between animate-pulse">
                  <div className="h-2.5 bg-gray-200 rounded-full w-24 mb-2.5"></div>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-3">
                <div className="flex items-center justify-between animate-pulse">
                  <div className="h-2.5 bg-gray-200 rounded-full w-24 mb-2.5"></div>
                </div>
              </td>
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex justify-end gap-3">
                  <div className="flex items-center justify-between animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full w-12 mb-2.5"></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeSkeleton;
