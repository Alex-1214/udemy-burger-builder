import React from 'react';

import classes from './Spinner.module.css';


const spinner = () => <div className={classes.skChase}>
<div className={classes.skChaseDot}></div>
<div className={classes.skChaseDot}></div>
<div className={classes.skChaseDot}></div>
<div className={classes.skChaseDot}></div>
<div className={classes.skChaseDot}></div>
<div className={classes.skChaseDot}></div>
</div>

export default spinner;