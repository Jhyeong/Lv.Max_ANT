import React, { Component } from 'react';
import './SideMenuBody.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

class SideMenuBody extends Component{

    constructor(props){
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.state = {
            selectedId : 1
        }
    }

    //클릭한 메뉴 활성화
    handleItemClick(e){
        this.setState({
            selectedId : e.target.id
        });
    }

    render(){
        return (
            <div className="SideMenuBody">
                <div className="ItemWrapper ui secondary vertical menu">
                    <Link to="/searchedstockitems">
                        <div className={this.state.selectedId == 1? "active item" : "item"}
                            id="1"
                            onClick={this.handleItemClick}
                        >조건검색 조회
                        </div>
                    </Link>
                    <Link to="/checkbalance">
                        <div className={this.state.selectedId == 2? "active item" : "item"}
                            id="2"
                            onClick={this.handleItemClick}
                        >
                        정산결과 조회
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SideMenuBody;