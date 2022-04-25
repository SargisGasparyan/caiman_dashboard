import classnames from 'classnames';
import React from 'react';
import s from './CustomLine.module.scss';
import arrowDown from '../../../assets/images/arrowDown.png';

const CustomLine = ({
  children, className, text, ...props
}) => {
  const { onClick } = props;
  const [ rot, setRotate ] = React.useState(false);
  return (
    <div className={classnames(s.root, { [className]: className })} {...props}>
      <img
        style={{
          width: '10px',
          height: '10px',
          marginRight: '20px',
          cursor: 'pointer',
          transform: rot ? 'rotate(0)' : 'rotate(-90deg)',
        }}
        src={arrowDown}
        onClick={() => {
          onClick();
          setRotate(!rot);
        }} />
      <p
        style={{ width: '6%', color: 'gray' }}
        >{text}</p>
      <div style={{ width: '92%', height: '3px', backgroundColor: 'gray' }} />
    </div>
  );
};

export default CustomLine;
