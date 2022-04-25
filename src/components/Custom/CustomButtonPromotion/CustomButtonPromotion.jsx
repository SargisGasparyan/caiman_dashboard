import classnames from 'classnames';
import s from './CustomButtonPromotion.module.scss';

const CustomButtonPromotion = ({
  children, className, text, ...props
}) => (
  <div className={s.add_promotion}>
    <button type='button' name="add_promotion" className={classnames(s.add_promotion__button, { [className]: className })} {...props}>
      {text || children}
    </button>
  </div>
);

export default CustomButtonPromotion;
