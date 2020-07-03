import React, {Component} from 'react';
import './SideMenuRow.css';
import { Link } from 'react-router-dom';

/**
 * 메뉴 row
 */
class SideMenuRow extends Component{
    render(){
        return (
            <Link to={this.props.path}>
                <div className={this.props.selectedId === this.props.id? "active item" : "item"}
                    onClick={this.props.onClickHandler}
                    id={this.props.id}>
                    {this.props.title}
                </div>
            </Link>
        );
    }

}

export default SideMenuRow;