"use client";

import { useState } from "react";
import Footer from "@/src/themes/components/footer/footer";
import TimeSheetList from "../time-sheet-list/time-sheet-list";

function TimeSheetTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dateRange, setDateRange] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [timeSheetList, setTimeSheetList] = useState(false);
  const itemsPerPage = 5;

  // Dummy data
  const timesheets = [
    {
      id: 1,
      week: 1,
      dateRange: "1 - 5 January, 2024",
      status: "COMPLETED",
      action: "View",
    },
    {
      id: 2,
      week: 2,
      dateRange: "8 - 12 January, 2024",
      status: "COMPLETED",
      action: "View",
    },
    {
      id: 3,
      week: 3,
      dateRange: "15 - 19 January, 2024",
      status: "INCOMPLETE",
      action: "Update",
    },
    {
      id: 4,
      week: 4,
      dateRange: "22 - 26 January, 2024",
      status: "COMPLETED",
      action: "View",
    },
    {
      id: 5,
      week: 5,
      dateRange: "28 January - 1 February, 2024",
      status: "MISSING",
      action: "Create",
    },
    {
      id: 6,
      week: 6,
      dateRange: "5 - 9 February, 2024",
      status: "COMPLETED",
      action: "View",
    },
    {
      id: 7,
      week: 7,
      dateRange: "12 - 16 February, 2024",
      status: "INCOMPLETE",
      action: "Update",
    },
    {
      id: 8,
      week: 8,
      dateRange: "19 - 23 February, 2024",
      status: "COMPLETED",
      action: "View",
    },
    {
      id: 9,
      week: 9,
      dateRange: "26 February - 1 March, 2024",
      status: "MISSING",
      action: "Create",
    },
    {
      id: 10,
      week: 10,
      dateRange: "4 - 8 March, 2024",
      status: "COMPLETED",
      action: "View",
    },
    {
      id: 11,
      week: 11,
      dateRange: "11 - 15 March, 2024",
      status: "INCOMPLETE",
      action: "Update",
    },
    {
      id: 12,
      week: 12,
      dateRange: "18 - 22 March, 2024",
      status: "COMPLETED",
      action: "View",
    },
    {
      id: 13,
      week: 13,
      dateRange: "25 - 29 March, 2024",
      status: "MISSING",
      action: "Create",
    },
    {
      id: 14,
      week: 14,
      dateRange: "1 - 5 April, 2024",
      status: "COMPLETED",
      action: "View",
    },
    {
      id: 15,
      week: 15,
      dateRange: "8 - 12 April, 2024",
      status: "INCOMPLETE",
      action: "Update",
    },
    {
      id: 16,
      week: 16,
      dateRange: "15 - 19 April, 2024",
      status: "COMPLETED",
      action: "View",
    },
    {
      id: 17,
      week: 17,
      dateRange: "22 - 26 April, 2024",
      status: "MISSING",
      action: "Create",
    },
    {
      id: 18,
      week: 18,
      dateRange: "29 April - 3 May, 2024",
      status: "COMPLETED",
      action: "View",
    },
    {
      id: 19,
      week: 19,
      dateRange: "6 - 10 May, 2024",
      status: "INCOMPLETE",
      action: "Update",
    },
    {
      id: 20,
      week: 20,
      dateRange: "13 - 17 May, 2024",
      status: "COMPLETED",
      action: "View",
    },
  ];

  const getStatusColor = (status: any) => {
    switch (status) {
      case "COMPLETED":
        return "!bg-green-100 !border-none !text-green-800 !text-[12px]";
      case "INCOMPLETE":
        return "!bg-yellow-100 !border-none !text-yellow-800 !text-[12px]";
      case "MISSING":
        return "!bg-pink-100 !text-pink-800 !border-none !text-[12px]";
      default:
        return "badge-ghost";
    }
  };

  const totalPages = Math.ceil(timesheets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTimesheets = timesheets.slice(startIndex, endIndex);

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <link
        href="https://cdn.jsdelivr.net/npm/daisyui@4.4.19/dist/full.min.css"
        rel="stylesheet"
        type="text/css"
      />

      {/* Header */}
      <header className="bg-white px-4 sm:px-6 lg:px-8 py-4 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="!text-[24px] font-bold text-black">ticktock</div>
            <nav className="hidden sm:flex space-x-6">
              <span
                onClick={() => setTimeSheetList(false)}
                className=" hover:text-base-content text-black cursor-pointer"
              >
                Timesheets
              </span>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}

      {!timeSheetList && (
        <main className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
          <div className="card bg-white shadow-lg !rounded-lg">
            <div className="card-body !rounded-lg !p-6">
              <h2 className="card-title text-[24px] text-gray-900 mb-[16px]">
                Your Timesheets
              </h2>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-[10px] mb-6">
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="select select-bordered w-full sm:w-48 !text-black !text-opacity-100 !bg-white"
                >
                  <option className="" value="all">
                    Date Range
                  </option>
                  <option className="" value="january">
                    January 2024
                  </option>
                  <option className="" value="february">
                    February 2024
                  </option>
                  <option value="march">March 2024</option>
                  <option value="april">April 2024</option>
                  <option value="may">May 2024</option>
                </select>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="select select-bordered w-full sm:w-48 !text-black !text-opacity-100 !bg-white"
                >
                  <option value="all">Status</option>
                  <option value="completed">Completed</option>
                  <option value="incomplete">Incomplete</option>
                  <option value="missing">Missing</option>
                </select>
              </div>

              {/* Table - Desktop */}
              <div className="hidden md:block overflow-x-auto round-box border border-gray-500 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),_0px_1px_3px_0px_rgba(0,0,0,0.1)] border-base-content/5">
                <table className="table table-zebra bordered">
                  <thead className="bg-gray-50">
                    <tr className="border-b !border-gray-200">
                      <th className="text-xs text-gray-500 uppercase">
                        Week #
                      </th>
                      <th className="text-xs text-gray-500 uppercase">Date</th>
                      <th className="text-xs text-gray-500 uppercase">
                        Status
                      </th>
                      <th className="text-xs text-gray-500 uppercase text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTimesheets.map((timesheet) => (
                      <tr
                        className="border-b !border-gray-200"
                        key={timesheet.id}
                      >
                        <td className="font-medium bg-gray-50 text-black">
                          {timesheet.week}
                        </td>
                        <td className="text-gray-500 !bg-white">
                          {timesheet.dateRange}
                        </td>
                        <td className="!bg-white">
                          <div
                            className={`badge ${getStatusColor(
                              timesheet.status
                            )}`}
                          >
                            {timesheet.status}
                          </div>
                        </td>
                        <td className="text-right font-normal !bg-white">
                          <button
                            onClick={() => setTimeSheetList(true)}
                            className="btn btn-ghost font-normal btn-sm text-primary"
                          >
                            {timesheet.action}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cards - Mobile */}
              <div className="md:hidden space-y-4">
                {currentTimesheets.map((timesheet) => (
                  <div
                    key={timesheet.id}
                    className="card bg-base-100 border !bg-gray-50 border-base-300 shadow-lg"
                  >
                    <div className="card-body !p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="text-sm !text-black opacity-70 mb-1">
                            Week {timesheet.week}
                          </div>
                          <div className="font-medium text-gray-300">
                            {timesheet.dateRange}
                          </div>
                        </div>
                        <div
                          className={`badge ${getStatusColor(
                            timesheet.status
                          )}`}
                        >
                          {timesheet.status}
                        </div>
                      </div>
                      <button
                        onClick={() => setTimeSheetList(true)}
                        className="cursor-pointer btn btn-ghost btn-sm text-primary self-start"
                      >
                        {timesheet.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex flex-col sm:flex-row items-center  justify-between mt-6 gap-4">
                <select className="select select-bordered !bg-[#F9FAFB] !text-black w-full sm:w-auto">
                  <option value={5}>5 per page</option>
                  <option value={10}>10 per page</option>
                  <option value={20}>20 per page</option>
                </select>

                <div className="join !border-gray-500">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="join-item btn !bg-[#F9FAFB] !text-[#4A5565] !border-gray-300"
                  >
                    Previous
                  </button>

                  <div className="hidden sm:flex join">
                    {renderPageNumbers().map((page, index) =>
                      page === "..." ? (
                        <button
                          key={`ellipsis-${index}`}
                          className="join-item btn !bg-[#F9FAFB] !text-[#4A5565] !border-gray-500 btn-disabled "
                        >
                          ...
                        </button>
                      ) : (
                        <button
                          key={page}
                          onClick={() => typeof page === 'number' && setCurrentPage(page)}
                          className={`join-item btn !bg-[#F9FAFB] !border-gray-300 !text-[#4A5565] ${
                            currentPage === page ? "btn-active" : ""
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  <div className="sm:hidden join-item btn !bg-[#F9FAFB] !text-[#4A5565] !border-gray-300  btn-disabled">
                    {currentPage} / {totalPages}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="join-item btn !bg-[#F9FAFB] !text-[#4A5565] !border-gray-300"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </main>
      )}
      {timeSheetList && <TimeSheetList />}
    </div>
  );
}

export default TimeSheetTable;
