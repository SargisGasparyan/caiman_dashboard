import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import appStyles from '../../../assets/styles/App.scss';
import s from './CustomDropzone.module.scss';
import styles from '../../MainPage/Routes/Segments/Segments.module.scss';

function MyDropzone() {
  const [ acceptedFiles, setAcceptedFiles ] = useState();
  const onDrop = useCallback((acceptedFilesFromInput) => {
    // Do something with the files
    setAcceptedFiles(acceptedFilesFromInput);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false });

  return (
    <div className={`${s.dropzone__container} ${styles.create__segment_container}`}>
      <label className={`${appStyles.customLabel} ${s.label}`}>
        <p>Drop file</p>
        <p className={`${s.asterisk}`}>*</p>
      </label>
      <div {...getRootProps()} className={`${s.dropzone}`}>
        <input {...getInputProps()} id={'dropzone'} className={`${s.hidden__input}`} />
        {
                    isDragActive
                      ? <p>Drop the files here ...</p>
                      : (!acceptedFiles && <p className={`${s.dropzone__input}`}>
                        Drag 'n' drop some files here, or click to select files
                      </p>)
                      || <p className={`${s.dropzone__input}`}>{acceptedFiles[0].name}</p>
                }
      </div>
    </div>
  );
}

export default MyDropzone;
