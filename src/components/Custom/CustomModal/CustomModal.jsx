import classames from 'classnames';
import s from './CustomModal.module.scss';

const CustomModal = ({
  title = '', onClose = () => {}, children, width,
}) => {
  const closeHandler = () => {
    onClose();
  };

  return (
    <div onClick={closeHandler} className={s.background} >
      <div onClick={e => e.stopPropagation()} className={s.modal} style={{ width }}>
        <div className={s.header}>
          <div className={s.title}>{title}</div>
          <div className={s.closeIcon} onClick={closeHandler} />
        </div>
        <div className={s.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
