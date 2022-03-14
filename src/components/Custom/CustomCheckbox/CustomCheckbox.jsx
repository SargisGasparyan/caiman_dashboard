import React from 'react';
import s from './CustomCheckbox.module.scss';

function CustomCheckbox({
  header, checked, onCheckboxClick, fromLeft, onClick, ...props
}) {
  return (
    <div className={s.checkbox_container} {...props} onClick={onClick}>
      {fromLeft && <p className={s.container_heading}>{header}</p> }
      <label className={s.container}>
        <input type="checkbox" checked={checked} onClick={onCheckboxClick} />
        <span className={s.checkmark} />
      </label>
      {!fromLeft && <p className={s.container_heading}>{header}</p>}
    </div>
  );
}

export default CustomCheckbox;
