import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import './uploader.css';
import EditIcon from 'assets/icons/edit-icon.svg';
import { Button } from 'stories/controls/button/Button';
import { useDetectOutsideClick } from 'hooks/useDetectOutsideClick';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { loadFileToCloudAction } from 'store/slices/file/file.slice';
import { FormikProps } from 'formik';
import {Spinner} from '../Spinner/spinner';

interface UploaderProps {
  id: string,
  children?: any,
  props: FormikProps<any>,
  field: any,
  meta?: {
    touched: boolean,
    error: string,
  },
  spinner?: boolean
}

const defaultLabel = (
  <div
    className='block edit w-4 sm:w-6 md:w-9 md:p-2 md:mr-2 lg:mr-1 overflow-hidden bg-blue-200 rounded-full cursor-pointer hover:bg-blue-300 transition duration-300'>
    <img src={EditIcon} alt='edit' className='max-w-full' />
  </div>
);


const Uploader = ({ id, children = defaultLabel, field, meta = { touched: false, error: '' }, spinner = false, props }: UploaderProps): ReactElement => {

  const dispatch = useDispatch();
  const cropperRef = useRef<HTMLImageElement>(null);
  const [isCropperVisible, setIsCropperVisible] = useDetectOutsideClick('.cropper-container', false);
  const [file, setFile] = useState<Record<string, string>>({});
  const { cloudURL, loading } = useTypedSelector(state => state.file);

  function handleChange(e: any) {
    if (e.target.files.length) {
      const file = e.target.files[0];
      const fileURL = URL.createObjectURL(file);
      setFile({
        name: file.name,
        type: file.type,
        fileURL,
      });
      setIsCropperVisible(true);
      e.target.value = '';
    }
  }

  const hideModal = () => {
    setIsCropperVisible(false);
  };

  const sendFile = (canvas: HTMLCanvasElement) => {
    const { name, type } = file;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const formData = new FormData();
      formData.append('image', blob, name);

      dispatch(loadFileToCloudAction(formData));
    }, type);
  };

  const submitImage = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    const canvas = cropper.getCroppedCanvas();

    sendFile(canvas);
    hideModal();
  };

  useEffect(() => {
    if (cloudURL) {
      props?.setFieldValue(field.name, cloudURL);
    }
  }, [cloudURL]);

  return (
    <div className='uploader'>
      <fieldset>
        <label htmlFor='image-input'>
          {children}
          {
            spinner && loading ?
            (<div className={children.props.className}>
              <Spinner size={9}/>
            </div>) :
            children
          }
        </label>
        <input type='file' id='image-input' name='file' onChange={e => handleChange(e)} className='hidden' accept='image/*' />
        <input type='hidden' id={id} {...field} />
      </fieldset>
      {
        file && isCropperVisible &&
        <div className='cropper fixed z-50 w-full h-screen flex justify-center items-center inset-0 p-4'>
          <div className='cropper-container bg-gray-400 p-4 sm:p-6 lg:p-8 rounded-lg'>
            <Cropper
              src={file.fileURL}
              style={{ height: '100%', maxHeight: 600, width: '100%', maxWidth: 800, background: '#A1A1AA' }}
              background={false}
              modal={true}
              aspectRatio={1 / 1}
              guides={false}
              ref={cropperRef}
              highlight={false}
              viewMode={2}
            />
            <div className='cropper-actions flex justify-between pt-6'>
              <Button
                like={'primary'}
                label='Save profile photo'
                onClick={submitImage}
              />
              <Button
                like={'secondary'}
                label='Cancel'
                onClick={hideModal}
              />
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export { Uploader};
