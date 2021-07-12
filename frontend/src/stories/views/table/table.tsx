import React, { useEffect } from 'react';
import './table.css';

interface TableProps {
  tableName: string;
  headerData: Array<string>;
  rowsData: Array<Array<string>>;
}

export const Table = ({ headerData, rowsData, tableName }: TableProps) => {
  useEffect(() => {
    if (headerData.length < 1) {
      throw Error('Table must have at least one header');
    } else if (!rowsData.every((row) => row.length === headerData.length)) {
      throw Error('Rows lengths must be equal header length');
    }
  }, [headerData, rowsData]);

  return (
    <div>
      <div className="py-1 px-2 font-roboto text-2xl font-bold">
        {tableName}
      </div>
      <div className="flex flex-col shadow-lg  border-2 border-gray-300 rounded pb-0.5">
        <div className="flex justify-between content-center p-0.5 rounded">
          {headerData.map((header, index) => (
            <div
              className="border-2 w-full bg-gray-500 font-roboto text-white font-semibold rounded text-lg px-2 py-1"
              key={`${header}${index}`}
            >
              {header}
            </div>
          ))}
        </div>
        <div className="flex flex-col ">
          {rowsData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex justify-between content-center border-gray-300 pt-0 px-0.5"
            >
              {row.map((cellData, cellIndex) => (
                <div
                  className="flex w-full font-roboto border-2 rounded border-gray-300 px-2 py-1 m-0.5"
                  key={`${rowIndex}${cellIndex}`}
                >
                  {cellData}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
