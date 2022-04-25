import classNames from 'classnames';
import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import s from './CustomDatepicker.module.scss';

const CustomSingleDatepicker = ({
  width, label = '', style = {}, setStartDate = () => {}, setEndDate = () => {}, name, ...props
}) => {
  const StartCustomInput = forwardRef(({ value, onClick, placeholder }, ref) => (
    <div
      className={s.root}
      ref={ref}
      onClick={onClick}
      style={{ width: width || 150, borderRadius: '15px 0 0 15px' }}>
      {value
        ? <div className={s.date}>{value}</div>
        : <div className={s.placeholder}>{placeholder}</div>
      }
      <div className={s.calendarIcon} />

    </div>
  ));
  const EndCustomInput = forwardRef(({ value, onClick, placeholder }, ref) => (
    <div className={s.root} ref={ref} onClick={onClick} style={{ width: width || 150, borderRadius: '0 15px 15px 0' }}>
      {value
        ? <div className={s.date}>{value}</div>
        : <div className={s.placeholder}>{placeholder}</div>
      }
      <div className={s.calendarIcon} />

    </div>
  ));

  const onStartChange = (date, e) => {
    if (!props.endDate || Date.parse(props.endDate) < Date.parse(date)) {
      setEndDate(date);
    }
    setStartDate(date, `${name}From`);
  };

  return (
    <div className={classNames(s.wrapper, 'container')} style={{ padding: 0, ...style }}>
      {label !== '' ? <div className='customLabel' style={{ textAlign: 'center' }}>{label}</div> : null }

      <div className={classNames(s.flex, 'row')}>
        <div className='col-auto' style={{ padding: 0 }}>
          <DatePicker
            selectsStart
            selected={props.startDate}
            onChange={onStartChange}
            dateFormat="dd.MM.yyyy"
            customInput={<StartCustomInput />}
            placeholderText='Choose date...'
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={121}
            {...props}
          />
        </div>
        <div className='col-auto' style={{ padding: 0 }}>
          <DatePicker
            selectsEnd
            selected={props.endDate}
            onChange={setEndDate}
            dateFormat="dd.MM.yyyy"
            customInput={<EndCustomInput />}
            placeholderText='Choose date...'
            minDate={props.startDate}
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={121}
            {...props}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomSingleDatepicker;
