import React from 'react';
import { useTranslation } from '../../../../../../context/LanguageProvider';
import s from '../../Stakes.module.scss';

function CountAndAmountContent({
  heading, fromAmount, toAmount, fromCount, toCount, handleInputChange,
}) {
  const { t } = useTranslation();

  return (
    <div className={s.amount__content}>
      <div>{heading}</div>
      <div className={s.from__to_container}>
        <div className={s.from__container}>
          <label>{ t('From') }</label>
          <input
            type='tel'
            maxLength='9'
            className={s.from__input}
            value={heading === 'Amount' ? fromAmount : fromCount}
            onChange={e => handleInputChange(e, heading === 'Amount' ? 'fromAmount' : 'fromCount')} />
        </div>
        <div className={s.to__container}>
          <label>{ t('To') }</label>
          <input
            type='tel'
            maxLength='9'
            className={s.to__input}
            value={heading === 'Amount' ? toAmount : toCount}
            onChange={e => handleInputChange(e, heading === 'Amount' ? 'toAmount' : 'toCount')} />
        </div>
      </div>
    </div>
  );
}

export default CountAndAmountContent;
