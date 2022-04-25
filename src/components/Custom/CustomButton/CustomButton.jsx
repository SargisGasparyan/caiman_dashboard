import classnames from 'classnames';
import s from './CustomButton.module.scss';

const CustomButton = ({
  children, className, text, ...props
}) => (
  <div>
    <button type='button' className={classnames(s.root, { [className]: className })} {...props}>
      {text || children}
    </button>
  </div>
);

export default CustomButton;
