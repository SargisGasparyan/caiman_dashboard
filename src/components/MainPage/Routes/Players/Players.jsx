import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import classNames from 'classnames';
import { resetPlayers, setPlayers } from '../../../../redux/ducks/playersDuck';
import { getPlayers } from '../../../../redux/thunks/playersThunk';
import usePagination from '../../../Custom/CustomPagination/usePagination';
import { removeLoading, addLoading } from '../../../../redux/ducks/loadingDuck';
import { useTranslation } from '../../../../context/LanguageProvider';
import { LOADING_IDS } from '../../../../constants/ids';
import PlayersReport from './PlayersComponents/PlayersReport';
import AddPlayers from './PlayersComponents/ReportsComponents/AddPlayersModal/AddPlayersModal';
import {
  CustomInput, CustomDoubleDatepicker, CustomButton, CustomSelect, CustomFromToInput,
} from '../../../Custom';
import s from './Players.module.scss';
import { firstLineFields, secondLineFields, initialState } from './helpers/constant';

function Players() {
  const dispatch = useDispatch();
  const { PLAYERS } = LOADING_IDS;
  const { t } = useTranslation();
  const [ state, setState ] = useState(initialState);
  const [ showAddPlayerModal, setShowAddPlayerModal ] = useState(false);
  const [ params, setParams ] = useState({});
  const { players, total } = useSelector(states => states.playersInfo);

  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSelecetChangeHandler = (value, selector) => {
    setState({ ...state, [selector.name]: value });
  };

  const setDate = (value, name) => {
    setState({ ...state, [name]: { value: moment(value).format('YYYY-MM-DD'), label: value }});
  };

  const {
    page,
    perPage,
    middlePage,
    totalPages,
    onPerpageChange,
    onPageChange,
    onPageEnter,
    setPage,
  } = usePagination(total, 10);

  const onReset = () => {
    setState(initialState);
    dispatch(resetPlayers());
  };

  const onApply = () => {
    console.log(players);
    const par = {};
    for (const k in state) {
      if (state[k]) {
        typeof state[k] === 'object' ? par[k] = state[k].value : par[k] = state[k];
      }
    }
    setParams(par);
    setPage(1);
    if (players && players.length > 0) {
      console.log('ok');
    } else {
      dispatch(getPlayers(par, 1, perPage.value));
    }
  };

  const popupShow = () => {
    setShowAddPlayerModal(prev => !prev);
  };

  const inputDrawer = (type, name, label, placeholder) => (
    <div className={s.mr_top} key={name}>
      <CustomInput
        label={t(`${label}`)}
        name={name}
        value={state[name] || ''}
        onChange={onChangeHandler}
        placeholder={placeholder || ''}
        style={{ minWidth: 170 }}
        />
    </div>
  );

  const selectorDrawer = (type, name, label, options) => (
    <div className={s.mr_top} key={name}>
      <CustomSelect
        name={name}
        label={t(`${label}`)}
        value={state[name]}
        options={options}
        style={{ minWidth: 170 }}
        onChange={onSelecetChangeHandler}
      />
    </div>
  );
  return (
    <>
      <div className={s.heading__part}>
        <p className={s.title}>{t('Players')}</p>
        <CustomButton
          onClick={popupShow}
          style={{
            width: 100,
          }}>
          {t('Add player')}
        </CustomButton>
      </div>
      { showAddPlayerModal && <AddPlayers closePopup={popupShow} />}
      <div className={classNames(s.content_container, 'container-fluid')}>
        <p className={s.filter_title}>{t('Filter')}</p>
        <div className={classNames(s.inputs_field, 'row')}>
          {firstLineFields.map(inputORselector => (inputORselector.type === 'input'
            ? <div className='col'>{inputDrawer(...Object.values(inputORselector))}</div>
            : <div className='col'>{selectorDrawer(...Object.values(inputORselector))}</div>))}
        </div>
        <div className={classNames(s.inputs_field, 'row')}>
          {secondLineFields.map(inputORselector => (inputORselector.type === 'input'
            ? <div className='col'>{inputDrawer(...Object.values(inputORselector))}</div>
            : <div className='col'>{selectorDrawer(...Object.values(inputORselector))}</div>))}
        </div>
        <div className='container-fluid'>
          <div className={classNames(s.datepickers__container, 'row')}>
            <div className='col-auto'>
              <CustomDoubleDatepicker
                label="Birthday"
                startDate={state.birthdayFrom.label}
                endDate={state.birthdayTo.label}
                setStartDate={(value) => { setDate(value, 'birthdayFrom'); }}
                setEndDate={(value) => { setDate(value, 'birthdayTo'); }}
              />
            </div>
            <div className='col-auto'>
              <CustomDoubleDatepicker
                label="Registration date"
                startDate={state.from.label}
                endDate={state.to.label}
                setStartDate={(value) => { setDate(value, 'from'); }}
                setEndDate={(value) => { setDate(value, 'to'); }}
              />
            </div>
          </div>
          <div className={classNames(s.rages, 'row')}>
            <div className='col-auto' style={{ padding: 0 }}>
              <CustomFromToInput
                width={200}
                label='Balance'
                placeholders={{ first: 'Min', second: 'Max' }}
                name={'Balance'}
                from={state.minBalance}
                to={state.maxBalance}
                onFromChange={e => setState({
                  ...state,
                  minBalance: e.target.value,
                })}
                onToChange={e => setState({
                  ...state,
                  maxBalance: e.target.value,
                })}
          />
            </div>
            <div className='col-auto' style={{ padding: 0 }}>
              <CustomFromToInput
                width={200}
                label='Bonus'
                placeholders={{ first: 'Min', second: 'Max' }}
                name={'Bonus'}
                from={state.minBonus}
                to={state.maxBonus}
                onFromChange={e => setState({
                  ...state,
                  minBonus: e.target.value,
                })}
                onToChange={e => setState({
                  ...state,
                  maxBonus: e.target.value,
                })}
          />
            </div>
          </div>
        </div>
        <div className={classNames(s.btn_block, 'container-fluid')} style={{ margin: '10px 0 0 0', padding: 0 }}>
          <div className='row'>
            <div className='col' style={{ padding: 0 }}>
              <CustomButton
                onClick={onApply}
                style={{ width: 110, margin: '8px' }}>
                {t('Apply')}
              </CustomButton>
            </div>
            <div className='col' style={{ padding: 0 }}>
              <CustomButton
                style={{
                  width: 110, background: '#e0e1e2', color: 'rgba(0, 0, 0, 0.6)', margin: '8px 20px 8px 0',
                }}
                onClick={onReset}>
                {t('Reset')}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <PlayersReport
        page={page}
        players={players || []}
        perPage={perPage}
        middlePage={middlePage}
        totalPages={totalPages}
        onPerpageChange={onPerpageChange}
        onPageChange={onPageChange}
        onPageEnter={onPageEnter}
        setPage={setPage}
        params={params}
      />
    </>
  );
}

export default Players;
