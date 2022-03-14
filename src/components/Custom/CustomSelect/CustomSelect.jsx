import classnames from 'classnames';
import React from 'react';
import Select from 'react-select';
import s from './CustomSelect.module.scss';

export const customStyles = custom => ({
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
  }),
  control: (provided, state) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    width: state.selectProps.width,
    border: '1px solid rgba(134, 236, 138, .15)',
    borderRadius: custom?.borderRadius || '0',
    boxShadow: custom?.boxShadow || 'none',
    backgroundColor: custom?.backgroundColor || 'var(--color-light-grey)',
    minHeight: 34,
    // height: 30,
    fontSize: 13,
    cursor: 'pointer',
    '&:hover': {
      borderColor: 'var(--color-red)',
    },
  }),
  singleValue: provided => ({
    ...provided,
    color: 'var(--color-blue)',
  }),
  indicatorSeparator: () => ({}),
  dropdownIndicator: () => ({
    color: 'var(--color-blue)',
    padding: '2px 8px',
    '& > svg': {
      display: 'block',
    },
  }),
  clearIndicator: provided => ({
    ...provided,
    padding: '2px 8px',
  }),
});

const CustomSelect = ({
  label, style = {}, customs, className, defaultValue, ...props
}) => (
  <div
    className={classnames(s.root, { [className]: className })}
    style={{ width: props.width || '100%', ...style }}>
    <div className='customLabel'>{label}</div>
    <Select
      styles={customStyles(customs)}
      isSearchable={false}
      defaultValue={defaultValue}
      isClearable
      // width={300}
      {...props}
     />
  </div>
);

export default CustomSelect;
