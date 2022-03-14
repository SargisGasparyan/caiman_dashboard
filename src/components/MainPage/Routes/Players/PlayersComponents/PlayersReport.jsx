import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import { useDispatch } from 'react-redux';
import CustomPagination from '../../../../Custom/CustomPagination/CustomPagination';
import CustomButton from '../../../../Custom/CustomButton/CustomButton';
import SettingsModal from './ReportsComponents/SettingsModal/SettingsModal';
import AddPlayers from './ReportsComponents/AddPlayersModal/AddPlayersModal';
import PlayersTable from './ReportsComponents/PlayersTable/PlayersTable';
import { copyTableToClipboard } from '../../../../../helpers/utils';
import { headers } from '../helpers/constant';
import s from './PlayersReport.module.scss';
import settingsLogo from '../../../../../assets/images/Player Settings/settings.svg';
import { getPlayers } from '../../../../../redux/thunks/playersThunk';

const paginateCount = 10;

function PlayersReport({
  page,
  perPage,
  middlePage,
  totalPages,
  onPerpageChange,
  onPageChange,
  onPageEnter,
  players,
  params,
  setPage,
}) {
  const dispatch = useDispatch();
  const [ settingsModal, setSettingsModal ] = useState(false);
  const [ addplayerModal, setAddplayerModal ] = useState(false);
  const [ activeHeaders, setActiveHeaders ] = useState(headers);
  const [ count, setCount ] = React.useState(0);

  const onSettingsClick = () => {
    setSettingsModal(prev => !prev);
  };

  const onAddPlayerClick = () => {
    setAddplayerModal(prev => !prev);
  };
  useEffect(() => {
    if (players.length) {
      count !== 0 && dispatch(getPlayers(params, page, perPage.value));
      setCount(prev => prev + 1);
    }
  }, [ page, perPage ]);

  return (
    <div className={`${s.margin_top_filter} ${s.filters_block}`}>
      <div className={s.report_header} >
        <p className={s.filter_title}>Report</p>
        <div className={s.add_player} />
      </div>
      <div className={s.reportHeader}>
        <div className={s.settingsLogoWrapper} onClick={onSettingsClick}>
          <img alt='settingsLogo' src={settingsLogo} />
        </div>

        <CustomButton onClick={() => copyTableToClipboard('playersId')} className={s.copyClipboard}>
          Copy to Clipboard
        </CustomButton>

      </div>
      <div className={s.universal_table_block}>
        <div id="playersId">
          <PlayersTable
            headers={activeHeaders}
            tableData={players}
        />
        </div>
        <div />
        { players.length !== 0
          && <CustomPagination
            page={page}
            perPage={perPage}
            middlePage={middlePage}
            totalPages={totalPages}
            onPerpageChange={onPerpageChange}
            onPageChange={onPageChange}
            onPageEnter={onPageEnter}
            paginateCount={paginateCount}
            setPage={setPage}
         />
        }
      </div>

      { addplayerModal && <AddPlayers closePopup={onAddPlayerClick} />}
      { settingsModal && (
      <SettingsModal
        activeHeaders={activeHeaders}
        setActiveHeaders={setActiveHeaders}
        closePopup={onSettingsClick} />
      )}
    </div>

  );
}
export default PlayersReport;
