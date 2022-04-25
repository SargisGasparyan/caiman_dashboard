import { useState } from 'react';
import classnames from 'classnames';
import s from './CustomInput.module.scss';

const CustomAddButton = ({
  icon, error, width, style = {}, label, className, inputClassName,
  value, size, wrapperStyle, ...props
}) => {
  const [ isFocused, setIsFocused ] = useState(false);
  return (
    <div className={classnames(s.root, { [className]: className })} style={{ width: width || '100%', ...style }}>
      { <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {label && <div className='customLabel'>{label}</div>}
        {size && <div>{size}</div>}
      </div>
      }
      <div
        className={
        classnames(
          s.inputWrapper,
          { [s.error]: error },
        )}
        style={wrapperStyle}
      >
        <div
          style={{
            textAlign: 'center', alignItems: 'center',
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          className={classnames(s.input, { [inputClassName]: inputClassName })}
          {...props} >
          <button style={{ width: '50px', height: '50px', borderRadius: '50%' }}>+</button>
        </div>
        {/* {icon && <div className={classnames(s.icon, {
          [s.focused]: isFocused,
        })} />} */}
      </div>
      {error && <span className='error-mes'>{error}</span>}
    </div>
  );
};

export default CustomAddButton;
