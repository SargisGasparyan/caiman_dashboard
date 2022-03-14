import React, { useState } from 'react';
import classnames from 'classnames';
import Select from 'react-select';
import s from './Pagination.module.scss';
import pagination_left_arrow from '../../../assets/images/pagination_left_arrow.png';
import pagination_right_arrow from '../../../assets/images/pagination_right_arrow.png';

const options = [
  { value: 30, label: 30 },
  { value: 40, label: 40 },
  { value: 50, label: 50 },
];
const customStyles = {
  control: base => ({
    ...base,
    width: 53,
    height: 27,
    minHeight: 24,
  }),
  indicatorSeparator: styles => ({ display: 'none' }),
  valueContainer: base => ({
    ...base,
    padding: '0 0 0 6px',
    position: 'initial',
  }),
  dropdownIndicator: base => ({
    ...base,
    padding: '3px 3px 3px 0px',
  }),
  menu: base => ({
    ...base,
    width: '55px',
  }),
  menuList: base => ({
    ...base,
    marginTop: '0px',
    padding: '0',
    borderRadius: '5px',
    textAlign: 'center',
  }),
};
function CustomPagination({
  page,
  perPage,
  middlePage,
  totalPages,
  onPerpageChange,
  onPageChange,
  paginateCount = 10,
  setPage,
}) {
  const [ inputPage, setInputPage ] = useState(page);
  const onPageEnter = (event) => {
    if (event.key === 'Enter') {
      inputPage > totalPages ? setPage(totalPages) : setPage(inputPage);
    }
  };
  const onPageInput = (event) => {
    const { value } = event.target;
    if ((/^[0-9]+$/.test(value) && value !== '0') || value === '') {
      setInputPage(event.target.value);
    }
  };
  return (
    <div className={s.pagination_container}>
      <div className={s.pagination_settings}>
        <div className={s.settings_box}>
          <p className={s.settings_name}>Number of items</p>
          <Select
            value={perPage}
            options={options}
            onChange={onPerpageChange}
            styles={customStyles}
            autosize
          />
        </div>
        <div className={s.settings_box}>
          <p className={s.settings_name}>Select page</p>
          <input
            width={inputPage}
            name={'pageInput'}
            className={s.settings_input}
            onChange={onPageInput}
            onKeyPress={onPageEnter}
          />

        </div>
      </div>
      <div className={s.pagination}>
        <div
          className={
            page === 1 ? s.pagination_box_d : s.pagination_box}
          onClick={() => onPageChange('down')}
        >
          <img
            src={pagination_left_arrow}
            className={s.pagination_image}
            alt="left_arrow"
          />
        </div>

        {totalPages <= paginateCount && (<div className={s.pagination_boxes_container}>
            {[ ...Array(Math.ceil(totalPages)) ].map((x, i) => (
              <div
                key={i + 1}
                className={classnames(s.pagination_box, {
                  [s.pagination_box_active]: Number(page) === i + 1,
                })}
                onClick={() => { onPageChange('current', i + 1); }}
              >
                {i + 1}
              </div>
            ))}
        </div>
        )

        }
        {(page < paginateCount) && (totalPages > paginateCount) && (
          <div className={s.pagination_boxes_container}>
            {[ ...Array(paginateCount) ].map((x, i) => (
              <div
                key={i}
                className={classnames(s.pagination_box, {
                  [s.pagination_box_active]: Number(page) === i + 1,
                })}
                onClick={() => onPageChange('current', i + 1)}
              >
                {i + 1}
              </div>
            ))}
            <div className={s.pagination_box}>...</div>
            <div
              className={s.pagination_box}
              onClick={() => onPageChange('current', totalPages)}
            >
              {totalPages}
            </div>
          </div>
        )}
        {page >= paginateCount && page <= totalPages - paginateCount
        && totalPages > paginateCount && (
          <div className={s.pagination_boxes_container}>
            <div className={s.pagination_box} onClick={() => onPageChange('current', 1)}>
              1
            </div>
            <div className={s.pagination_box}>...</div>
            {[ ...Array(middlePage), page, ...Array(middlePage) ].map((x, i) => (
              <div
                key={i}
                className={classnames(s.pagination_box, {
                  [s.pagination_box_active]:
                    Number(page) === page - middlePage + i,
                })}
                onClick={() => onPageChange('current', page - middlePage + i)}
              >
                {page - middlePage + i}
              </div>
            ))}
            <div className={s.pagination_box}>...</div>
            <div
              className={s.pagination_box}
              onClick={() => onPageChange('current', totalPages)}
            >
              {totalPages}
            </div>
          </div>
        )}
        {page > totalPages - paginateCount && totalPages > paginateCount && (
          <div className={s.pagination_boxes_container}>
            <div className={s.pagination_box} onClick={() => onPageChange('current', 1)}>
              {1}
            </div>
            <div className={s.pagination_box}>...</div>
            {[ ...Array(paginateCount + 1) ].map((x, i) => (
              <div
                key={i}
                className={classnames(s.pagination_box, {
                  [s.pagination_box_active]:
                    Number(page) === totalPages - paginateCount + i,
                })}
                onClick={() => onPageChange('current', totalPages - paginateCount + i)}
              >
                {totalPages - paginateCount + i}
              </div>
            ))}
          </div>
        )}

        <div
          className={s.pagination_box}
          style={{ display: page === totalPages ? 'none' : '' }}
          onClick={() => { onPageChange('up'); }}>

          <img
            src={pagination_right_arrow}
            alt="arrowDown"
            className={s.pagination_image}
          />

        </div>
      </div>
    </div>
  );
}

export default CustomPagination;
