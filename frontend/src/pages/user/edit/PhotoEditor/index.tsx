// import Cropper from 'cropperjs';
import Cropper from "react-cropper";
import 'cropperjs/dist/cropper.css';
import React, { useRef, useState } from 'react';
import { Button } from "stories/controls/button/Button";

import Avatar from 'assets/images/avatar-example.png';
import EditIcon from 'assets/icons/edit-icon.svg';

const PhotoEditor: React.FC = () => {
  return (
        <div className="mx-auto">
          <div className="avatar-section flex items-start">
            <div className="w-14 sm:w-16 md:w-24 md:mr-2 lg:mr-1 overflow-hidden border-2 border-gray-300 rounded-full">
              <img src={Avatar} alt="user-photo" className="max-w-full" />
            </div>
            <div className="edit w-4 sm:w-6 md:w-9 md:p-2 md:mr-2 lg:mr-1 overflow-hidden bg-blue-200 rounded-full">
              <img src={EditIcon} alt="edit" className="max-w-full" />
            </div>
          </div>
          {
            <Button
              size="big"
              color="blue"
              label="Save profile photo"
              // onClick={handler}
            />
          }
        </div>
  )
}

const Uploader: React.FC = () => {
  const cropperRef = useRef<HTMLImageElement>(null);
  const [file, setFile] = useState('');
  // const [cropperInfo, setCropperInfo] = useState()

  function handleChange(e: any) {
    if(e.target.files.length) {
      const fileURL = URL.createObjectURL(e.target.files[0])
      setFile(fileURL)
    }
    // console.log(e.target.files[0]);
  }

  const onCrop = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    console.log(cropper);

    // console.log(cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <>
      <div>
        <input type="file" onChange={e => handleChange(e)} value='Choose Photo'/>
        {/* { file && <img src={file} className="block max-w-full"/> } */}
      </div>
      <Cropper
        src={file}
        style={{ height: 400, width: '100%', maxWidth: 600}}
        // Cropper.js options
        background={false}
        modal={false}
        aspectRatio={1/1}
        guides={false}
        crop={onCrop}
        ref={cropperRef}
        viewMode={2}
      />
      {/* <h2>{cropperInfo}</h2> */}
    </>
  );
};

export { PhotoEditor };

// const UploaderOld: React.FC = () => {
//   const [file, setFile] = useState('');

//   function handleChange(e: any) {
//     const fileURL = URL.createObjectURL(e.target.files[0])
//     setFile(fileURL)
//   }
//   return (
//     <div>
//       <input type="file" onChange={e => handleChange(e)}/>
//       { file && <img src={file} className="block max-w-full"/> }
//     </div>
//   );
// }
