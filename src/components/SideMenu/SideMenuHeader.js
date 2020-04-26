import React from 'react';
import './SideMenuHeader.css';
import logo from './images/LvMaxANT.jpg';
import { Link } from 'react-router-dom';

const SideMenuHeader = () => (
    <Link to="/">
        <div className="SideMenuHeader">
                <div className="LogoDiv">
                    {/* <img src={logo} className="LogoImg"/> */}
                    <h1>만렙 개미 프로젝트</h1>
                    <p>Lv.Max ANT</p>
                </div>
        </div>
    </Link>
)


export default SideMenuHeader;