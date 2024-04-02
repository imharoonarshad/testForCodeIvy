
import { GoInfo } from "react-icons/go";
import Image from "next/image";
const packageData= [
  {
    name: "Ronald Richards",
    leaveType: "Sick Leave",
    fromTo: "15/02/2024- 16/02/2024",
    noOfDays: `1 Day`,
    status: "Accepted",
  },
  {
    name: "Ronald Richards",
    leaveType: "Casual Leave",
    fromTo: "11/03/2024- 14/03/2024",
    noOfDays: `4 Days`,
    status: "Rejected",
  },
  {
    name: "Ronald Richards",
    leaveType: "Emergency Leave",
    fromTo: "12/03/2024- 14/03/2024",
    noOfDays: `3 Days`,
    status: "Accepted",
  },
  {
    name: "Ronald Richards",
    leaveType: "Sick Leave",
    fromTo: "18/01/2024- 22/01/2024",
    noOfDays: `5 Days`,
    status: "Pending",
  },
];

const TableThree = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h2 className="px-2 py-2 font-bold">Pending Approvals</h2>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Employee
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Leave Type
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                From & To
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                No of Days
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b flex justify-start items-center gap-3 border-[#eee] px-4 py-5 pl-4 dark:border-strokedark xl:pl-11">
                  <Image
                    width={34}
                    height={34}
                    src={"/images/user/user-01.png"}
                    alt="User"
                  />
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.name}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.leaveType}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.fromTo}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.noOfDays}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                      packageItem.status === "Accepted"
                        ? "bg-success text-success"
                        : packageItem.status === "Rejected"
                          ? "bg-danger text-danger"
                          : "bg-warning text-warning"
                    }`}
                  >
                    {packageItem.status}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                      <GoInfo />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
