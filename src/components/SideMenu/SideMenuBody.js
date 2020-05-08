import React, { Component } from 'react';
import './SideMenuBody.css';
import SideMenuRow from './SideMenuRow';


class SideMenuBody extends Component{

    constructor(props){
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.state = {
            selectedId : 0
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
                <SideMenuRow path="/searched-stock-items"   id="0" selectedId={this.state.selectedId} onClickHandler={this.handleItemClick}></SideMenuRow>
                <SideMenuRow path="/trade-result-summary"   id="1" selectedId={this.state.selectedId} onClickHandler={this.handleItemClick}></SideMenuRow>
                <SideMenuRow path="/trade-result-detail"    id="2" selectedId={this.state.selectedId} onClickHandler={this.handleItemClick}></SideMenuRow>
                <SideMenuRow path="/common-code"            id="3" selectedId={this.state.selectedId} onClickHandler={this.handleItemClick}></SideMenuRow>
            </div>
        );
    }
}

export default SideMenuBody;