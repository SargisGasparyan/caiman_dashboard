import classNames from 'classnames';
import s from './Dashboard.module.scss';
import FirstWidgetExample from './FirstWidgetExample/FirstWidgetExample';
import ForthWidgetExample from './ForthWidgetExample/ForthWidgetExample';
import SecondWidgetExample from './SecondWidgetExample/SecondWidgetExample';
import ThirdWidgetExample from './ThirdWidgetExample/ThirdWidgetExample';

function Dashboard() {
  return (
    <div className={classNames(s.container, 'container-fluid')}>
      <div className='row'>
        <SecondWidgetExample className='col' />
        <FirstWidgetExample className='col' />
      </div>
      <div className='row'>
        <ThirdWidgetExample className='col' />
        <ForthWidgetExample className='col' />
      </div>
    </div>
  );
}

export default Dashboard;
