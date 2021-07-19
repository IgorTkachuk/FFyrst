import React, { useEffect, useState } from 'react';
import arrow from './right-arrow.svg';
import './table.css';

type Row = {
  [key: string]: string
}

type Func = {
  [key: string]: (id: string) => void
}

interface TableProps {
  tableName: string;
  headers: Array<string>;
  data: Row[];
  funcs?: Func
}

export const Table: React.FC<TableProps> = ({ headers, data, tableName, funcs }) => {
  return (
    <div>
      <div className='py-1 px-2 font-roboto text-2xl text-green-900 font-bold '>
        {
          tableName
        };
      </div>
      <div className='flex flex-col shadow-lg border-2 border-green-400 rounded overflow-x-auto pb-0.25 '>
        <div
          className={`rounded grid pl-0.5 pr-0.5`}
          style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}
        >
          {headers.map((header, index) => (
            <div
              className='whitespace-nowrap box-content border-2 bg-green-600 font-roboto text-white font-semibold rounded text-lg px-2 py-1'
              key={`${header}${index}`}
            >
              {header}
            </div>
          ))}
          {data.map((row, rowIndex) =>
            headers.map((prop, cellIndex) => (
              <div
                className='custom whitespace-nowrap width-test bg-green-200 font-roboto border-t-2 border-b-2  border-white px-2 py-1'
                key={`${rowIndex}${cellIndex}`}
              >
                {row.prop}
              </div>
            )),
          )}
        </div>
      </div>
      ;
    </div>
  );
};
