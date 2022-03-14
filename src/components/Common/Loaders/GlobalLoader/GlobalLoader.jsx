import CubeLoader from '../CubeLoader/CubeLoader';

const GlobalLoader = () => (
  <div className={'flex-c-c'} style={{ height: '100vh', overflow: 'hidden' }}>
    <CubeLoader size={50} />
  </div>
);

export default GlobalLoader;
