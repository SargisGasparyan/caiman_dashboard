import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import s from './CustomDatepicker.module.scss';

const CustomSingleDatepicker = ({
  width, label, style = {}, ...props
}) => {
  const ExampleCustomInput = forwardRef(({ value, onClick, placeholder }, ref) => (
    <div className={s.root} ref={ref} onClick={onClick} style={{ width: width || 200 }}>
      {value
        ? <div className={s.date}>{value}</div>
        : <div className={s.placeholder}>{placeholder}</div>
      }
      <div className={s.calendarIcon} />

    </div>
  ));
  return (
    <div className={s.wrapper} style={{ width: width || 100, ...style }}>
      {label && <div className='customLabel'>{label}</div> }
      <DatePicker
        dateFormat="dd.MM.yyyy"
        customInput={<ExampleCustomInput />}
        placeholderText='Choose date...'
        showYearDropdown
        scrollableYearDropdown
        {...props}
    />

    </div>
  );
};

export default CustomSingleDatepicker;
