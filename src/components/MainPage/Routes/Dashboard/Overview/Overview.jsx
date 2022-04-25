import classNames from 'classnames';
import s from './Overview.module.scss';
import { IMAGES } from '../../../../../assets/images';
import { useTranslation } from '../../../../../context/LanguageProvider';
import CustomDoubleDatePicker from '../../../../Custom/CustomDatepicker/CustomDoubleDatepicker.jsx';
import { overviewFirstLine } from '../constants';

function Overview() {
  const { t } = useTranslation();
  return (
    <div className={classNames('container-fluid', s.overview__menu)} style={{ padding: 0 }}>
      <div className={s.overview_header__top}>
        <div className={s.overview__title}>
          <img src={IMAGES.redEye.src} alt={IMAGES.redEye.alt} />
          overview
        </div>
        <div className={s.overview__date}>
          <div className={s.date_types}>
            <div className={classNames(s.dt, s.day, s.active)}>day</div>
            <div className={classNames(s.dt, s.week)}>week</div>
            <div className={classNames(s.dt, s.month)}>month</div>
          </div>
          <CustomDoubleDatePicker />
        </div>
      </div>
      <div className={classNames('row row-cols-xl-4', s.overview__list)}>
        {overviewFirstLine.map(widget => <div className={classNames('col-sm-12 col-md-6 col-lg-6 col-xl-3', s.overview_list__item)}>
          <div className={s.overview_item__menu}>
            <div className={s.overview__icon}>
              <img src={widget.src} alt={widget.alt} />
            </div>
            <div className={s.overview_menu_information}>
              <div className={s.overview_menu__list}>
                <div className={s.overview_menu__title}>
                  <span className={s.overview__type}>{widget.title}</span>
                  <button className={s.button}>
                    <img src={IMAGES.pathSVG.src} alt={IMAGES.pathSVG.alt} />
                  </button>
                </div>
              </div>
              {widget.total && <div className={s.overview_menu__list}>
                <div className={s.overview_menu__title}>
                  total
                </div>
                <div className={s.overview__number}>
                  {widget.total}
                </div>
              </div>}
              {widget.withDeposit && <div className={s.overview_menu__list}>
                <div className={s.overview_menu__title}>
                  With Deposit
                </div>
                <div className={s.overview_number__blue}>
                  {widget.withDeposit}
                </div>
              </div>}
              {widget.unique && <div className={s.overview_menu__list}>
                <div className={s.overview_menu__title}>
                  Unique
                </div>
                <div className={s.overview_number__blue}>
                  {widget.unique}
                </div>
              </div>}
            </div>
          </div>
        </div>)}
      </div>
      <div className={classNames('row row-cols-xl-2', s.overview__list)}>
        <div className={classNames('col col-sm-12 col-lg-6 col-xl-6', s.sport_information__menu)}>
          <div className={s.sport__menu}>
            <div className={s.sport_information__header}>
              <div className={s.sport_header__name}>
                Casino
                {/* <span className={s.sport__button}> */}
                <button className={s.button}>
                  <img src={IMAGES.pathSVG.src} alt={IMAGES.pathSVG.alt} />
                </button>
                {/* </span> */}
              </div>
              <div className={s.sport_header__title}>
                Casino
                {/* <span className={s.sport__button}> */}
                <button className={s.button}>
                  <img src={IMAGES.greyPath.src} alt={IMAGES.greyPath.alt} />
                </button>
                {/* </span> */}
              </div>
            </div>
            <div className={s.sport_list}>
              <div className={s.sport_list__item}>
                <div className={s.sport_item__name}>
                  Turnover
                </div>
                <div className={s.sport_item__number}>
                  $ 245,587
                </div>
              </div>

              <div className={s.sport_list__item}>
                <div className={s.sport_item__name}>
                  Average Bet
                </div>
                <div className={s.sport_item__number}>
                  $ 245,587
                </div>
              </div>

              <div className={s.sport_list__item}>
                <div className={s.sport_item__name}>
                  Max Bet
                </div>
                <div className={s.sport_item__number}>
                  $ 245,587
                </div>
              </div>

              <div className={s.sport_list__item}>
                <div className={s.sport_item__name}>
                  Max Win
                </div>
                <div className={s.sport_item__number}>
                  $ 245,587
                </div>
              </div>
            </div>
            <div className={s.sport__component}>
              <div className={s.component__header}>
                <div className={s.component_header__title}>
                  Games
                  {/* <span className={s.component__bottom}> */}
                  <button className={s.button}>
                    <img src={IMAGES.pathSVG.src} alt={IMAGES.pathSVG.alt} />
                  </button>
                  {/* </span> */}
                </div>
              </div>
              <div className={s.component__bottom}>
                <div className={s.component_bottom__information}>
                  <div className={s.component_bottom__title}>
                    Popular
                  </div>
                  <span className={s.component_bottom__text}>
                    Super Hot
                  </span>
                  <span className={s.component__prsent}>
                    20%
                  </span>
                </div>
                <div className={s.component_bottom__information}>
                  <div className={s.component_bottom__title}>
                    Hight GGR
                  </div>
                  <span className={s.component_bottom__text}>
                    20 Super Hot
                  </span>
                  <span className={s.component__prsent}>
                    24%
                  </span>
                </div>
              </div>
            </div>
            <div className={s.sport__component}>
              <div className={s.component__header}>
                <div className={s.component_header__title}>
                  Users
                  {/* <span className={s.component__bottom}> */}
                  <button className={s.button}>
                    <img src={IMAGES.pathSVG.src} alt={IMAGES.pathSVG.alt} />
                  </button>
                  {/* </span> */}
                </div>
              </div>
              <div className={s.component__bottom}>
                <div className={s.component_bottom__information}>
                  <div className={s.component_bottom__title}>
                    Unique Users
                  </div>
                  <span className={s.component_bottom__text}>
                    25,758
                  </span>
                  <span className={s.component__prsent}>
                    20%
                  </span>
                </div>
                <div className={s.component_bottom__information}>
                  <div className={s.component_bottom__title}>
                    Hight Loss
                  </div>
                  <span className={s.component_bottom__text}>
                    $28,985
                  </span>
                  <span className={s.component_prsent__yellow}>
                    24%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames('col col-sm-12 col-lg-6 col-xl-6', s.sport_information__menu)}>
          <div className={s.sport__menu}>
            <div className={s.sport_information__header}>
              <div className={s.sport_header__name}>
                Casino
                {/* <span className={s.sport__button}> */}
                <button className={s.button}>
                  <img src={IMAGES.pathSVG.src} alt={IMAGES.pathSVG.alt} />
                </button>
                {/* </span> */}
              </div>
              <div className={s.sport_header__title}>
                Casino
                {/* <span className={s.sport__button}> */}
                <button className={s.button}>
                  <img src={IMAGES.greyPath.src} alt={IMAGES.greyPath.alt} />
                </button>
                {/* </span> */}
              </div>
            </div>
            <div className={s.sport_list}>
              <div className={s.sport_list__item}>
                <div className={s.sport_item__name}>
                  Turnover
                </div>
                <div className={s.sport_item__number}>
                  $ 245,587
                </div>
              </div>

              <div className={s.sport_list__item}>
                <div className={s.sport_item__name}>
                  Average Bet
                </div>
                <div className={s.sport_item__number}>
                  $ 245,587
                </div>
              </div>

              <div className={s.sport_list__item}>
                <div className={s.sport_item__name}>
                  Max Bet
                </div>
                <div className={s.sport_item__number}>
                  $ 245,587
                </div>
              </div>

              <div className={s.sport_list__item}>
                <div className={s.sport_item__name}>
                  Max Win
                </div>
                <div className={s.sport_item__number}>
                  $ 245,587
                </div>
              </div>
            </div>
            <div className={s.sport__component}>
              <div className={s.component__header}>
                <div className={s.component_header__title}>
                  Games
                  {/* <span className={s.component__bottom}> */}
                  <button className={s.button}>
                    <img src={IMAGES.pathSVG.src} alt={IMAGES.pathSVG.alt} />
                  </button>
                  {/* </span> */}
                </div>
              </div>
              <div className={s.component__bottom}>
                <div className={s.component_bottom__information}>
                  <div className={s.component_bottom__title}>
                    Popular
                  </div>
                  <span className={s.component_bottom__text}>
                    Football
                  </span>
                  <span className={s.component__prsent}>
                    20%
                  </span>
                </div>
                <div className={s.component_bottom__information}>
                  <div className={s.component_bottom__title}>
                    Hight GGR
                  </div>
                  <span className={s.component_bottom__text}>
                    Golf
                  </span>
                  <span className={s.component__prsent}>
                    24%
                  </span>
                </div>
              </div>
            </div>
            <div className={s.sport__component}>
              <div className={s.component__header}>
                <div className={s.component_header__title}>
                  Users
                  {/* <span className={s.component__bottom}> */}
                  <button className={s.button}>
                    <img src={IMAGES.pathSVG.src} alt={IMAGES.pathSVG.alt} />
                  </button>
                  {/* </span> */}
                </div>
              </div>
              <div className={s.component__bottom}>
                <div className={s.component_bottom__information}>
                  <div className={s.component_bottom__title}>
                    Unique Users
                  </div>
                  <span className={s.component_bottom__text}>
                    25,758
                  </span>
                  <span className={s.component__prsent}>
                    20%
                  </span>
                </div>
                <div className={s.component_bottom__information}>
                  <div className={s.component_bottom__title}>
                    Check
                  </div>
                  <span className={s.component_bottom__text}>
                    $28,985
                  </span>
                  <span className={s.component__prsent}>
                    20%
                  </span>
                </div>
                <div className={s.component_bottom__information}>
                  <div className={s.component_bottom__title}>
                    Hight Loss
                  </div>
                  <span className={s.component_bottom__text}>
                    $28,985
                  </span>
                  <span className={s.component_prsent__yellow}>
                    24%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
