import s from './Spinner.module.scss';

const Spinner = ({ size = 7, color }) => (
  <div className={s.spinner}>
    <div className={s.bounce1} style={{ width: size, height: size, backgroundColor: color || 'var(--color-blue)' }} />
    <div className={s.bounce2} style={{ width: size, height: size, backgroundColor: color || 'var(--color-blue)' }} />
    <div className={s.bounce3} style={{ width: size, height: size, backgroundColor: color || 'var(--color-blue)' }} />
  </div>
);

export default Spinner;
