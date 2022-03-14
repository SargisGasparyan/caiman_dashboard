import React, { useEffect, useState, useRef } from 'react';
import classnames from 'classnames';
import s from '../CustomDatepicker/CustomDatepicker.module.scss';
import arrow from '../../../assets/images/arrow-down-red.svg';

const CustomTimePicker = () => {
  const [ time, setTime ] = useState({ minute: null, hour: null });
  const hours = [ ...Array(24) ];
  const minutes = [ ...Array(60) ];
  const hoursContRef = useRef(null);
  const minutesContRef = useRef(null);

  const onScroll = (current, type) => {
    type === 'up' ? current.scrollTop -= 150 : current.scrollTop += 150;
  };

  const onElementClick = (e, type, id) => {
    setTime({ ...time, [type]: id });
  };
  useEffect(() => {
    hoursContRef.current.scrollTop = hoursContRef.current.scrollHeight
         / hours.length * time.hour;
    minutesContRef.current.scrollTop = minutesContRef.current.scrollHeight
         / minutes.length * time.minute;
  }, [ ]);
  return (<div className={s.time_picker}>
    <div className={s.time_picker_ul}>
      <img
        src={arrow}
        alt='arrow'
        className={classnames(s.arrow, s.arrow_up)}
        onClick={() => onScroll(hoursContRef.current, 'up')}
        />
      <div
        className={s.hours_minutes}
        ref={hoursContRef}
        >
        {hours.map((el, id) => (
          <div
            className={classnames(s.time_element, { [s.time_element_active]: id === time.hour })}
            onClick={(e) => { onElementClick(e, 'hour', id); }}
            key={id}
            >
            {id < 10 ? `0${id}` : id }
          </div>
        ))}
      </div>
      <img
        src={arrow}
        alt='arrow'
        className={s.arrow}
        onClick={() => onScroll(hoursContRef.current, 'bottom')}
        />
    </div>
    <div className={s.time_picker_ul}>
      <img
        src={arrow}
        alt='arrow'
        className={classnames(s.arrow, s.arrow_up)}
        onClick={() => onScroll(minutesContRef.current, 'up')}
        />
      <div
        className={s.hours_minutes}
        ref={minutesContRef}
        >
        {minutes.map((el, id) => (
          <div
            className={
                  classnames(s.time_element, { [s.time_element_active]: id === time.minute })
                }
            onClick={(e) => { onElementClick(e, 'minute', id); }}
            key={id}
        >
            {id < 10 ? `0${id}` : id }
          </div>
        ))}
      </div>
      <img
        src={arrow}
        alt='arrow'
        className={s.arrow}
        onClick={() => onScroll(minutesContRef.current, 'bottom')}
        />
    </div>
  </div>);
};

export default CustomTimePicker;
