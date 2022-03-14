import React from 'react';
import moment from 'moment';
import { useTranslation } from '../../../../../../../context/LanguageProvider';
import styles from '../../../Segments.module.scss';
import s from '../../../../Stakes/Stakes.module.scss';

function SegmentsTable({
  id, title, type, createDate, lastUpdate,
}) {
  const { t } = useTranslation();

  const create_date = createDate ? moment(createDate).format('DD.MM.yyyy') : '';
  const last_date = lastUpdate ? moment(lastUpdate).format('DD.MM.yyyy') : '';

  return (
    <div className={`${styles.active__container} ${styles.segments__table}`}>
      <table className={s.stakes__table}>
        <thead>
          <tr className={s.table__heading}>
            <th>{ t('ID') }</th>
            <th>{ t('Title') }</th>
            <th>{ t('Type') }</th>
            <th>{ t('Create Date') }</th>
            <th>{ t('Last Update') }</th>
            <th>{ t('Users') }</th>
            <th>{ t('Edit') }</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{type}</td>
            <td>{create_date}</td>
            <td>{last_date}</td>
            <td>Users</td>
            <td>edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default SegmentsTable;
