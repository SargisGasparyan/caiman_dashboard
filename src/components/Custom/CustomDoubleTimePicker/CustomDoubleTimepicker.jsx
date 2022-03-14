import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import s from '../CustomDatepicker/CustomDatepicker.module.scss';
import ss from './CustomDoubleTimepicker.module.scss';
import TimePickerDropdown from './TimePickerDropdown';

const CustomDoubleTimepicker = ({
  width,
  label = '',
  style = {},
  startTime,
  endTime,
  timeTo,
  timeFrom,
  setTime,
  sameDay,
  ...props
}) => {
  const parrentRef = useRef(null);
  const [ showTimePicker, setShowTP ] = useState('');
  const onShowClick = (type) => {
    type === 'left' && setShowTP(type);
    type === 'right' && setShowTP(type);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (parrentRef.current && !parrentRef.current.contains(e.target)) {
      setShowTP('');
    }
  };

  const onInput = (e) => {
    setShowTP('');
    const obj = {
      hour: e.target.value.slice(0, 2),
      minutes: e.target.value.slice(-2),
    };
    setTime(obj, e.target.name);
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // useEffect(() => {
  //   if (sameDay) {
  //     if (startTime.hour > endTime.hour) {
  //       console.log('sss', timeFrom, endTime);
  //       setTime(timeFrom, endTime);
  //     }
  //   }
  // }, [ startTime, endTime ]);
  return (
    <>
      <div
        className={classnames(s.wrapper, ss.position_wrapper)}
        style={{ width: width * 2 || 400, ...style }}
        ref={parrentRef}
      >
        {label !== '' ? (
          <div className="customLabel" style={{ textAlign: 'center' }}>
            {label}
          </div>
        ) : null}
        <div className={s.flex}>
          <div
            className={ss.time_root}
            style={{ width: width || 200, borderRadius: '38px 9px 9px 38px' }}
            onClick={() => { onShowClick('left'); }}
          >
            <input
              type="time"
              name={timeFrom}
              value={`${startTime.hour}:${startTime.minutes}`}
              onChange={onInput}
              />
            {showTimePicker === 'left' && <TimePickerDropdown
              name={timeFrom}
              time={startTime}
              setTime={setTime}
            />}
          </div>
          <div
            className={ss.time_root}
            style={{ width: width || 200, borderRadius: '9px 38px 38px 9px' }}
            onClick={() => { onShowClick('right'); }}
          >
            <input
              type="time"
              name={timeTo}
              value={`${endTime.hour}:${endTime.minutes}`}
              onChange={onInput}
            />
            {showTimePicker === 'right' && <TimePickerDropdown
              name={timeTo}
              time={endTime}
              setTime={setTime}
            />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomDoubleTimepicker;
