import className from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Button.module.scss';

const cn = className.bind(styles);

// By default button will be dark
// To get light button pass the prop "type="light""
export default function Button({ children, type, btnType }) {
  return (
    <button type={btnType} className={cn('btn', `btn__${type}`)}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  btnType: PropTypes.oneOf(['submit', 'button']),
  type: PropTypes.string,
};
