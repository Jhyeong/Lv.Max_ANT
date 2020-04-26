import React from 'react';
import SideMenuHeader from './SideMenuHeader'
import SideMenuBody from './SideMenuBody'
import './SideMenu.css';

const SideMenu = () => (
    <div className="SideMenu">
        <SideMenuHeader></SideMenuHeader>
        <SideMenuBody></SideMenuBody>
    </div>
)


export default SideMenu;