import React from 'react';
import styles from '../../Segments.module.scss';
import MyDropzone from '../../../../../Custom/CustomDropzone/CustomDropzone';

function StaticSegment() {
  return (
    <div className={styles.segments__list_container}>
      <MyDropzone />
    </div>
  );
}

export default StaticSegment;
