import classNames from 'classnames';
import { useState } from 'react';
import s from './Monitoring.module.scss';
import { IMAGES } from '../../../../../assets/images/index.js';
import { monitoring } from '../constants';
import { useTranslation } from '../../../../../context/LanguageProvider';

function Monitoring() {
  const { t } = useTranslation();
  const [ monitoringWidgets, setMonitoringWidgets ] = useState(monitoring);

  return (
    <div className={classNames('container-fluid', s.container)}>
      <div className={classNames('row', s.monitoringHeader)}>
        <div className={s.namePart}>
          <img src={IMAGES.monitoringSVG.src} alt={IMAGES.monitoringSVG.alt} />
          <p className={s.monitoringTitle}>{t('Monitoring')}</p>
        </div>
        <div className={s.updatePart}>
          <p>{t('Last update')}: 01.02.22</p>
          <img src={IMAGES.refresh.src} alt={IMAGES.refresh.alt} />
        </div>
      </div>
      <div className={s.monitoring__information}>
        <div className={classNames('row row-cols-xl-4', s.monitoring__list)}>
          {monitoringWidgets.map(item => <div className={classNames('col-12 col-md-6 col-lg-6 col-xl-3', s.monitoring_list__item)}>
            <div className={s.monitoring_item__menu}>
              <div className={s.monitoring_menu__information}>
                <div>
                  <img src={item.icon} alt={item.alt} />
                </div>
                <div>
                  <div className={s.monitoring_menu__title}>
                    <span className={s.monitoring__type}>{item.title}</span>
                    <button>
                      <img src={IMAGES.pathSVG.src} alt={IMAGES.pathSVG.alt} />
                    </button>
                  </div>
                </div>
              </div>
              <div className={s.monitoring__total}>
                <div>Total</div>
                <div>
                  <span>{item.total}</span>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </div>);
}

export default Monitoring;
