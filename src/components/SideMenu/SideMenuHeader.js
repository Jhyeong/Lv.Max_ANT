import React from 'react';
import './SideMenuHeader.css';
import { Link } from 'react-router-dom';

const SideMenuHeader = () => (
    <Link to="/">
        <div className="SideMenuHeader">
            <div className="logoWrapper">
                <img src="styles/images/logo.png" className="logo"/>
                <div>만렙개미</div>
            </div>
        </div>
    </Link>
)


export default SideMenuHeader;