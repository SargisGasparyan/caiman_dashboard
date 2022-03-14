import s from './CubeLoader.module.scss';

const CubeLoader = ({ size }) => (
  <div className={s.cubeWrap}>
    <div className={s.cube} style={{ width: size || 20, height: size || 20, transformOrigin: `50% 50% ${`${-size / 2}px` || -10}` }}>
      <div className={s.faces1} style={{ width: size || 20, height: size || 20 }} />
      <div
        className={s.faces2}
        style={{ width: size || 20, height: size || 20, transform: `rotateX(180deg) translateZ(${`${size}px` || 20})` }} />
    </div>
  </div>
);

export default CubeLoader;
