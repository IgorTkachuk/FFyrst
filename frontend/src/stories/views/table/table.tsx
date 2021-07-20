import React from 'react';
import './table.css';

type Row = {
  [key: string]: string
}

interface TableProps {
  tableName: string;
  headers: Array<string>;
  data: Row[];
}

export const Table: React.FC<TableProps> = ({ headers, data, tableName, children }) => {
  console.log(children);
  return (
    <div>
      <div className='py-1 px-2 font-roboto text-2xl text-green-900 font-bold '>
        {
          tableName
        }
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
          {data.map((row) => {
            return React.Children.map(children, (child: any) => {
              return React.cloneElement(child, { row });
            });
          })}
        </div>
      </div>
    </div>
  );
};

