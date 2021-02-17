import React from 'react';
import Toolbar from './UI/Toolbar/Toolbar'
import SideDrawer from './UI/SideDrawer/SideDrawer'

const layout = (props) => {
    return (<React.Fragment >
        <SideDrawer/>
        <Toolbar/>
        {props.children}
    </React.Fragment>)

};

export default layout;