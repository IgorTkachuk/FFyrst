import React, { ReactElement, useState } from 'react';
import mockAvatar from './mock-avatar.jpg';
import iconEdit from './icon-edit.svg';
import { Button } from '../../../stories/controls/button/Button';

const UserProfileDetails = (): ReactElement => {
  const [firstName, setFirstName] = useState('Aveline');
  const [lastName, setLastName] = useState('Wallbank');
  const [birthData, setBirthDate] = useState('22.08.1991');
  const [phoneNumber, setPhoneNumber] = useState('+380501230545');
  const [email, setEmail] = useState('+380501230545');
  return (
    <div className="container shadow-2xl border-t-2 rounded-3xl mx-auto w-full max-w-6xl w-4/5 mt-8 flex flex-col justify-start items-center p-8 pl-14 pt-14 min-h-screen">
      <div className="w-8/12">
        <div className="font-roboto text-5xl self-start font-semibold">
          Profile
        </div>
        <div className="self-start mt-8 ml-4 relative w-60">
          <img
            className="w-60 rounded-full"
            src={mockAvatar}
            alt="user avatar"
          />
          <div className="bg-red-500 w-12 h-12 rounded-full flex justify-center items-center absolute inset-3/4 cursor-pointer transform hover:scale-105 active:scale-100">
            <img
              className="w-8"
              src={iconEdit}
              alt="icon-edit"
              style={{ fill: 'red' }}
            />
          </div>
        </div>
      </div>
      <div className="ml-4 mr-4 mt-12 flex flex-col self-center w-8/12">
        <div className=" flex justify-between w-full">
          <div className="flex flex-col" style={{ width: '45%' }}>
            <label
              htmlFor="input-first-name"
              className=" font-roboto text-xl font-semibold mb-1.5 "
            >
              First name
            </label>
            <input
              className="font-roboto outline-none border-2 border-gray-300 rounded-md text-xl p-2.5 w-full"
              type="text"
              id="input-first-name"
              placeholder="First name"
              value={firstName}
            />
          </div>
          <div className="flex flex-col" style={{ width: '47%' }}>
            <label
              htmlFor="input-last-name"
              className=" font-roboto text-xl font-semibold mb-1.5 "
            >
              Last name
            </label>
            <input
              className="font-roboto outline-none border-2 border-gray-300 rounded-md text-xl p-2.5 w-full"
              type="text"
              id="input-last-name"
              placeholder="Last name"
              value={lastName}
            />
          </div>
        </div>
        <div className=" flex justify-between w-full mt-10">
          <div className="flex flex-col" style={{ width: '45%' }}>
            <label
              htmlFor="input-birth-date"
              className=" font-roboto text-xl font-semibold mb-1.5"
            >
              Birth date
            </label>
            <input
              className="font-roboto outline-none border-2 border-gray-300 rounded-md text-xl p-2.5 w-full"
              type="text"
              id="input-birth-date"
              placeholder="Birth date"
              value={birthData}
            />
          </div>
          <div className="flex flex-col" style={{ width: '47%' }}>
            <label
              htmlFor="input-phone-number"
              className=" font-roboto text-xl font-semibold mb-1.5 "
            >
              Phone number
            </label>
            <input
              className="font-roboto outline-none border-2 border-gray-300 rounded-md text-xl p-2.5 w-full"
              type="text"
              id="input-phone-number"
              placeholder="Phone number"
              value={phoneNumber}
            />
          </div>
        </div>
        <div className="flex flex-col w-full mt-10">
          <label
            htmlFor="input-email"
            className=" font-roboto text-xl font-semibold mb-1.5 "
          >
            Email
          </label>
          <input
            className="font-roboto outline-none border-2 border-gray-300 rounded-md text-xl p-2.5 w-full"
            type="text"
            id="input-email"
            placeholder="youremail@gmail.com"
            value={email}
          />
        </div>
        <div className="w-full flex justify-end mt-10">
          <Button color={'blue'} label="Update profile" size={'big'} />
        </div>
      </div>
    </div>
  );
};

export { UserProfileDetails };
