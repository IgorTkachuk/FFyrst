import React from 'react';
import { Table } from '../../../stories/views/table/table';
import BtnCell from '../../../stories/views/table/cells/btnCell';
import TextCell from '../../../stories/views/table/cells/textCell';
import ImgCell from '../../../stories/views/table/cells/imgCell';

const UserManage = () => {

  const user = {
    id: '1',
    img: 'https://otomatix.com.br/img/avatar/default.png',
    name: 'dimas',
    phone: '+380676642177',
    email: 'dimonprykh@gmail.com',
  };

  const users = [user];

  return (
    <div>
      <Table tableName={'Users'} headers={['Name', 'Phone', 'Email', 'Photo', 'Del']} data={users}>
        <TextCell prop={'name'} />
        <TextCell prop={'phone'} />
        <TextCell prop={'email'} />
        <ImgCell prop={'img'} alt={'Avatar'} />
        <BtnCell prop={'id'} title={'Delete'} callback={(id) => console.log("click "+id)} />
      </Table>
    </div>
  );
};

export { UserManage };
