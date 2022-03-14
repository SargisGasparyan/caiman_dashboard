import React from 'react';
import classNames from 'classnames';
import s from './CustomFromToInput.module.scss';
import { useTranslation } from '../../../context/LanguageProvider';

const CustomFromToInput = ({
  width, label = '', style = {}, placeholders = null, name, from, to, onFromChange = () => {}, onToChange = () => {}, ...props
}) => {
  const { t } = useTranslation();
  return (
    <div style={{ ...style, margin: '10px 10px 0 10px' }} className='container-fluid'>
      {label !== '' ? <div className='customLabel' style={{ textAlign: 'center' }}>{label}</div> : null }
      <div className={classNames('flex', 'row')}>
        <div className='col-auto' style={{ padding: 0 }}>
          <input
            type={'text'}
            className={s.firstInput}
            style={{ width: width || 200, fontSize: 14, color: '#5b7077' }}
            name={`${name}From`}
            placeholder={placeholders ? t(placeholders.first) : ''}
            value={from}
            onChange={onFromChange} />
        </div>
        <div className='col-auto' style={{ padding: 0 }}>
          <input
            type={'text'}
            className={s.secondInput}
            style={{ width: width || 200, fontSize: 14, color: '#5b7077' }}
            name={`${name}To`}
            placeholder={placeholders ? t(placeholders.second) : ''}
            value={to}
            onChange={onToChange} />
        </div>
      </div>
    </div>);
};

export default CustomFromToInput;
