import classnames from 'classnames';
import s from './CustomSwitcher.module.scss';

const CustomSwitcher = ({
  width, style = {}, className, disabled, color, ...props
}) => (
  <label
    className={classnames(s.checker, {
      [className]: className,
      [s.disabled]: disabled,
    })}
    style={{ fontSize: width || 15, ...style }}>
    <input className={s.checkbox} type="checkbox" disabled={disabled} {...props} />
    <div className={s.checkmark}>
      <svg viewBox="0 0 100 100" style={{ background: props.checked && color }}>
        <path d="M20,55 L40,75 L77,27" fill="none" stroke="#FFF" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </label>
);

export default CustomSwitcher;
