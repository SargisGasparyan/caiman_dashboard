import { Responsive, WidthProvider } from 'react-grid-layout';
import { erexeq } from '../../constants';
import '../../../../../../../node_modules/react-grid-layout/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);
function FirstWidgetExample() {
  return (
    <div className='col' />
  );
}

export default FirstWidgetExample;
