import classNames from 'classnames';
import s from '../Stakes.module.scss';
import { useTranslation } from '../../../../../context/LanguageProvider';
import CustomRadioButton from '../../../../Custom/CustomRadioButton/CustomRadioButton.jsx';

function StakesFilterKind({ state, onRadioChange }) {
  const { t } = useTranslation();
  return (
    <div>
      <div className={classNames(s.kind, 'container')}>
        <table>
          <caption>{t('Kind')}</caption>
          <tr>
            <td><CustomRadioButton
              label={'All'}
              name={'sport'}
              id={'allLive'}
              checked={!state.sport && 'allLive'}
              onRadioChange={onRadioChange}
                /></td>
            <td><CustomRadioButton
              label={'Live'}
              name={'sport'}
              id={'live'}
              checked={state.sport}
              onRadioChange={onRadioChange}
                /></td>
            <td><CustomRadioButton
              label={'Prematch'}
              name={'sport'}
              id={'prematch'}
              checked={state.sport}
              onRadioChange={onRadioChange}
                /></td>
          </tr>
          <tr>
            <td><CustomRadioButton
              label={'All'}
              name={'source'}
              id={'allInternet'}
              checked={!state.source && 'allInternet'}
              onRadioChange={onRadioChange}
                /></td>
            <td><CustomRadioButton
              label={'Internet'}
              name={'source'}
              id={'internet'}
              checked={state.source}
              onRadioChange={onRadioChange}
                /></td>
            <td><CustomRadioButton
              label={'Shop'}
              name={'source'}
              id={'shop'}
              checked={state.source}
              onRadioChange={onRadioChange}
                /></td>
          </tr>
          <tr>
            <td><CustomRadioButton
              label={'All'}
              name={'ticketKind'}
              id={'allExpress'}
              checked={!state.ticketKind && 'allExpress'}
              onRadioChange={onRadioChange}
                /></td>
            <td><CustomRadioButton
              label={'Express'}
              name={'ticketKind'}
              id={'express'}
              checked={state.ticketKind}
              onRadioChange={onRadioChange}
                /></td>
            <td><CustomRadioButton
              label={'Ordinar'}
              name={'ticketKind'}
              id={'ordinar'}
              checked={state.ticketKind}
              onRadioChange={onRadioChange}
                /></td>
          </tr>
          <tr>
            <td><CustomRadioButton
              label={'All'}
              name={'market_type'}
              id={'allStatistics'}
              checked={!state.market_type && 'allStatistics'}
              onRadioChange={onRadioChange}
                /></td>
            <td><CustomRadioButton
              label={'Statistics'}
              name={'market_type'}
              id={'statistics'}
              checked={state.market_type}
              onRadioChange={onRadioChange}
                /></td>
          </tr>
          {/* {Object.keys(kindRadioButtons).map((item, idx) => <tr>
                {kindRadioButtons[item].map((rowItem, index) => <td>
                  <CustomRadioButton
                    label={rowItem.label}
                    name={rowItem.name}
                    id={rowItem.id}
                    checked={!state[rowItem.name] && rowItem.id}
                    onRadioChange={onRadioChange}
                />
                </td>)}
              </tr>)} */}
        </table>
      </div>
    </div>
  );
}

export default StakesFilterKind;
