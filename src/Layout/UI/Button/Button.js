import React from "react";
import PropTypes from 'prop-types'

import classes from './Button.module.css'

const button = (props) => {

  let additionClass = props.type ==='positive' ? classes.PositiveButton : classes.NegativeButton
  let buttonClass = [classes.ModalButton, additionClass].join(' ')
  return (
    <button className={buttonClass} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;

button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired
};
