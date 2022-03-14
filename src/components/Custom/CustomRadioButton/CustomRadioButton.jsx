import React from 'react';
import s from './CustomRadioButton.module.scss';

function CustomRadioButton({
  name, label, checked, onRadioChange, id, ...props
}) {
  console.log(id, checked);
  return (
    <div className={s.container} {...props} >
      <div className={s.radioWrapper}>
        <input
          type="radio"
          id={id}
          name={name}
          checked={id === checked}
          onClick={onRadioChange}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
}

export default CustomRadioButton;
