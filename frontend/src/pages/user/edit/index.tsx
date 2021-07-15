import React from 'react';
import { PhotoEditor } from './PhotoEditor';

const UserEdit: React.FC = () => {
  return (
    <>
    <div className="container mx-auto flex flex-col justify-center items-center p-20 bg-green-100">
      <div className="bg-white shadow-xl rounded-2xl px-32 pt-6 pb-8 mb-4 flex flex-col justify-center">
        <PhotoEditor />
      </div>
    </div>
    </>
  );
}
export { UserEdit };
