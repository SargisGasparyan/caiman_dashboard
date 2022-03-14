import { useState } from 'react';
import classnames from 'classnames';
import s from './CustomInput.module.scss';

const CustomInput = ({
  icon, error, width, style = {}, label, className, inputClassName, value, wrapperStyle, ...props
}) => {
  const [ isFocused, setIsFocused ] = useState(false);
  return (
    <div className={classnames(s.root, { [className]: className })} style={{ width: width || '100%', ...style }}>
      { label && <div className='customLabel'>{label}</div> }
      <div
        className={
        classnames(
          s.inputWrapper,
          { [s.error]: error },
        )}
        style={wrapperStyle}
      >
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          className={classnames(s.input, { [inputClassName]: inputClassName })}
          {...props} />
        {/* {icon && <div className={classnames(s.icon, {
          [s.focused]: isFocused,
        })} />} */}
      </div>
      {error && <span className='error-mes'>{error}</span>}
    </div>
  );
};

export default CustomInput;
