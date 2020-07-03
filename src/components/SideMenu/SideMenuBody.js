import React, { Component } from 'react';
import './SideMenuBody.css';
import SideMenuRow from './SideMenuRow';


class SideMenuBody extends Component{
    constructor(props){
        super(props);
        const alias = "/lv-mx-report";

        this.state = {
            selectedId : null,
            title : [
                         "조건검색 조회"
                        ,"체결결과 요약"
                        ,"체결결과 상세"
                        ,"공통코드 관리"
                        ,"프로세스 관리"
                        ,"조건검색식 관리"
                    ],
            path  : [
                         alias + "/searched-stock-items"
                        ,alias + "/trade-result-summary"
                        ,alias + "/trade-result-detail"
                        ,alias + "/common-code"
                        ,alias + "/process-control"
                        ,alias + "/condition-list"
                    ]
        }
    }

    //클릭한 메뉴 활성화
    handleItemClick(e){
        this.setState({
            selectedId : parseInt(e.target.id, 10)
        });
    }

    render(){
        return (
            <div className="SideMenuBody">
                <SideMenuRow id={0} path= {this.state.path[0]} title= {this.state.title[0]} selectedId={this.state.selectedId} onClickHandler={this.handleItemClick.bind(this)}></SideMenuRow>
                <SideMenuRow id={1} path= {this.state.path[1]} title= {this.state.title[1]} selectedId={this.state.selectedId} onClickHandler={this.handleItemClick.bind(this)}></SideMenuRow>
                <SideMenuRow id={2} path= {this.state.path[2]} title= {this.state.title[2]} selectedId={this.state.selectedId} onClickHandler={this.handleItemClick.bind(this)}></SideMenuRow>
                <SideMenuRow id={3} path= {this.state.path[3]} title= {this.state.title[3]} selectedId={this.state.selectedId} onClickHandler={this.handleItemClick.bind(this)}></SideMenuRow>
                {/* <SideMenuRow id={4} path= {this.state.path[4]} title= {this.state.title[4]} selectedId={this.state.selectedId} onClickHandler={this.handleItemClick.bind(this)}></SideMenuRow> */}
                <SideMenuRow id={5} path= {this.state.path[5]} title= {this.state.title[5]} selectedId={this.state.selectedId} onClickHandler={this.handleItemClick.bind(this)}></SideMenuRow>
            </div>
        );
    }
}

export default SideMenuBody;