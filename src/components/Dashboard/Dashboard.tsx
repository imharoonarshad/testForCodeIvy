"use client";
import React from "react";
import ChartTwo from "../Charts/ChartTwo";

import CardDataStats from "../CardDataStats";

import { CiMenuKebab } from "react-icons/ci";
import TableThree from "@/components/Tables/TableThree";
import UpcomingLeaves from "../Charts/UpcomingLeaves";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="flex w-full flex-row items-center justify-between pb-10">
        <div className="flex flex-col gap-3">
          <p className="text-[30px] font-semibold text-black dark:text-white">
            Leave Management
          </p>
          <p className="text-[16px] text-black dark:text-white ">Overview</p>
        </div>
        <p className=" text-black dark:text-white">15/02/2024 11:23 AM</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats total="15" month="This month">
          <div className="flex justify-between">
            <h3 className="text-title-sm font-bold text-black dark:text-white">
              Annual Leave
            </h3>
            <CiMenuKebab size={24} />
          </div>
        </CardDataStats>
        <CardDataStats total="11" month="This month">
          <div className="flex justify-between">
            <h3 className="text-title-sm font-bold text-black dark:text-white">
              Sick Leave
            </h3>
            <CiMenuKebab size={24} />
          </div>
        </CardDataStats>
        <CardDataStats total="6" month="This month">
          <div className="flex justify-between">
            <h3 className="text-title-sm font-bold text-black dark:text-white">
              Other Leave
            </h3>
            <CiMenuKebab size={24} />
          </div>
        </CardDataStats>
        <CardDataStats total="5" month="This month">
          <div className="flex justify-between">
            <h3 className="text-title-sm font-bold text-black dark:text-white">
              Pending Request
            </h3>
            <CiMenuKebab size={24} />
          </div>
        </CardDataStats>
      </div>

      <div className="mt-2 grid grid-cols-6 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartTwo />
        <UpcomingLeaves />
      </div>
      <div className=" mt-4 grid grid-cols-1 ">
        <TableThree />
      </div>
    </>
  );
};

export default Dashboard;
