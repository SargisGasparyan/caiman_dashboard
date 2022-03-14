import classnames from 'classnames';
import { useSelector } from 'react-redux';
import CubeLoader from '../CubeLoader/CubeLoader';
import s from './ContentLoader.module.scss';

const ContentLoader = () => {
  const { isSidebarActive } = useSelector(state => state.configs);
  return (
    <div className={classnames(s.root, 'transition', { [s.active]: isSidebarActive })}>
      <CubeLoader size={40} />
    </div>
  );
};

export default ContentLoader;
