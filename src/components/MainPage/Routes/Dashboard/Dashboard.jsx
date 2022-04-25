import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';
import Muuri from 'muuri';
import { monitoring } from './constants';
import s from './Dashboard.module.scss';
import { IMAGES } from '../../../../assets/images/index.js';
import Monitoring from './Monitoring/Monitoring';
import Overview from './Overview/Overview';

function Dashboard() {
  // const [ currentCard, setCurrentCard ] = useState(null);
  // const [ cardList, setCardList ] = useState(fakeData);
  const [ gridElement, setGridElement ] = useState(null);
  // const gridRef = useRef(null);
  // useEffect(() => {
  //   if (!gridElement) {
  //     const element = gridRef.current;
  //     setGridElement(new Muuri(element, { dragEnabled: true }));
  //   }
  // }, [ gridElement ]);

  // function dragEndHandler(e, item) {
  //   // console.log('drag', item);
  //   e.target.style.background = 'unset';
  // }

  // function dragOverHandler(e, item) {
  //   e.preventDefault();
  //   e.target.style.background = 'lightgrey';
  // }

  // function dropHandler(e, item) {
  //   e.preventDefault();
  //   setCardList(cardList.map((c) => {
  //     if (c.id === item.id) {
  //       return { ...c, order: currentCard.order };
  //     }
  //     if (c.id === currentCard.id) {
  //       return { ...c, order: item.order };
  //     }
  //     return c;
  //   }));
  //   e.target.style.background = 'unset';
  // }

  // const sortCards = (a, b) => (a.order > b.order ? 1 : -1);
  return (
    <div>
      {/* <div className={classNames(s.container, 'container-fluid')}>
        <div className='row' style={{ display: 'flex', alignItems: 'center' }}>
          <img src={IMAGES.monitoringSVG} alt={'Monitoring'} />
          <p className={s.monitoringTitle}>Monitoring</p>
        </div>
        <div ref={gridRef} className={classNames('row', 'grid', s.monitoringPart)}>
          {monitoringWidgets.map(item => <div className={classNames('col', s.item)}>
            <div className={classNames('item-content')}>
              <div className={s.monitoringItem}>
                <div className={s.itemLeftPart}>
                  <img src={item.icon} alt="User icon" />
                  <p>{item.title}</p>
                  <img src={IMAGES.pathSVG} alt='Path svg' className={s.path} />
                </div>
                <p>Total
                  <span className={s.total}>{item.total}</span>
                </p>
              </div>
            </div>
          </div>)}
        </div>
      </div> */}
      <div className={s.container}>
        <div className={s.extentions}>
          <img
            src={IMAGES.extentions.src}
            alt={IMAGES.extentions.alt}
            className={s.extentionsIcon} />
          <p>Config Dashboard</p>
        </div>
      </div>
      <div style={{ padding: 15 }}>
        <Monitoring />
        <Overview />
      </div>
    </div>);
}

export default Dashboard;
