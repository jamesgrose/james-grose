import React from "react";
import { WorkData } from "../../utils/work";
import { format, parseISO } from "date-fns";

interface DateProps {
  className?: string;
  date: WorkData["data"]["date"];
}

const Date = ({ date, className = "" }: DateProps): JSX.Element => {
  const display = format(parseISO(date), "MMM, yyyy");

  return (
    <div className={`font-semibold text-gray-600 ${className}`}>{display}</div>
  );
};

export default Date;
