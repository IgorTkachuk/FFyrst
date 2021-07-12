import React, { useEffect, useState } from 'react';
import arrow from './right-arrow.svg';
import './table.css';

interface TableProps {
  tableName: string;
  headerData: Array<string>;
  rowsData: Array<Array<string>>;
  itemsOnPage: number;
}

export const Table = ({
  headerData,
  rowsData,
  tableName,
  itemsOnPage = 15,
}: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState<Array<Array<string>>>([]);
  const [maxPage, setMaxPage] = useState(1);

  const updateState = (page: number): void => {
    const reminder = rowsData.length % itemsOnPage;
    let maxPage = (rowsData.length - reminder) / itemsOnPage;
    if (reminder > 0) maxPage++;
    setMaxPage(maxPage);

    const countStart = (page - 1) * itemsOnPage;
    const data = [];
    for (let i = countStart; i < page * itemsOnPage; i++) {
      if (i > rowsData.length - 1) {
        break;
      }
      data.push(rowsData[i]);
    }
    setCurrentData(data);
  };

  useEffect(() => {
    if (headerData.length < 1) {
      throw Error('Table must have at least one header');
    } else if (!rowsData.every((row) => row.length === headerData.length)) {
      throw Error('Rows lengths must be equal header length');
    }
    console.log('updated');
    updateState(currentPage);
  }, [headerData, rowsData]);

  const onNextPage = () => {
    if (currentPage === maxPage) return;
    setCurrentPage(currentPage + 1);
    updateState(currentPage + 1);
  };
  const onPrevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    updateState(currentPage - 1);
  };

  return (
    <div>
      <div className="py-1 px-2 font-roboto text-2xl text-green-900 font-bold ">
        {tableName}
      </div>
      <div className="flex flex-col shadow-lg  border-2 border-green-400 rounded overflow-x-auto pb-0.25 ">
        <div
          className={`rounded grid grid-cols-${headerData.length} pl-0.5 pr-0.5`}
        >
          {headerData.map((header, index) => (
            <div
              className="whitespace-nowrap box-content border-2 bg-green-600 font-roboto text-white font-semibold rounded text-lg px-2 py-1"
              key={`${header}${index}`}
            >
              {header}
            </div>
          ))}
          {currentData.map((row, rowIndex) =>
            row.map((cellData, cellIndex) => (
              <div
                className="custom whitespace-nowrap width-test bg-green-200 font-roboto border-t-2 border-b-2  border-white px-2 py-1"
                key={`${rowIndex}${cellIndex}`}
              >
                {cellData}
              </div>
            )),
          )}
        </div>
      </div>
      <div className="w-full flex justify-end mt-4 pr-3">
        <img
          src={arrow}
          alt="arrow"
          className="transform rotate-180 w-6 cursor-pointer transform active:scale-95 hover:scale-105"
          onClick={onPrevPage}
        />
        <div className="pl-2 pr-2 text-green-900">
          {currentPage === maxPage ? maxPage : `${currentPage} ..${maxPage}`}
        </div>
        <img
          src={arrow}
          alt="arrow"
          className="w-6 cursor-pointer transform active:scale-95 hover:scale-105"
          onClick={onNextPage}
        />
      </div>
    </div>
  );
};
