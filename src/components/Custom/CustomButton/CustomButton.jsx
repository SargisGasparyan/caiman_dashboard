import classnames from 'classnames';
import s from './CustomButton.module.scss';

const CustomButton = ({
  children, className, text, ...props
}) => (
  <button className={classnames(s.root, { [className]: className })} {...props}>
    {text || children}
  </button>
);

export default CustomButton;
