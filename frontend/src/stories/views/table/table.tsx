import React from 'react';
import './table.css';

type Row = {
  [key: string]: string | boolean | number,
}

interface TableProps {
  headers: Array<string>;
  data: Row[];
}

export const Table: React.FC<TableProps> = ({ headers, data, children }) => {
  return (
    <table className={'table-auto w-full '}>
      <thead>
      <tr>
        {headers.map((el, idx) => <th className=' font-thin px-2 ' key={idx}>{el}</th>)}
      </tr>
      </thead>
      <tbody className={'divide-y '}>
      {data.map((row, rowIdx) => <tr className='px-2 hover:bg-gray-100 transition duration-200'
        // key={String(row.id)}
        key={rowIdx}
      >
        {
          React.Children.map(children, (child: any, cellIdx) => {
            return React.cloneElement(child, { row, id: `${rowIdx}${cellIdx}` });
          })
        }
      </tr>)}
      </tbody>
    </table>
  );
};

