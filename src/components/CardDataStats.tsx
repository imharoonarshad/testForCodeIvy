import React, { ReactNode } from "react";

interface CardDataStatsProps {
  total: string;
  month: string;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  
  total,
  month,
 
  children,
}) => {
  return (
    <div className="rounded-xl border border-stroke  bg-white px-4 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className=" items-center justify-center  dark:bg-meta-4">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-sm font-bold text-black dark:text-white">
            {total}
          </h4>
        
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium `}
        >
          {month}
          
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
