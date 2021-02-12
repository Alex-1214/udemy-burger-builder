import React from 'react'

import classes from './Purchase.module.css'

const purchase = (props) => { 
    return (<button onClick={props.ordered} className={classes.Purchase}>Order</button>)
}

export default purchase;