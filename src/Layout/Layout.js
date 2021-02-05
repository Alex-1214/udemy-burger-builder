import React from 'react';

import classes from './Layout.module.css';

const layout = (props) => {
    return (<React.Fragment >
        <div className={classes.Layout}>Hello - This is nav bar</div>
        {props.children}
    </React.Fragment>)

};

export default layout;