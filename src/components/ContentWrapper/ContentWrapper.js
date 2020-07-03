import React, {Component} from 'react';
import {Content} from '../';
import { Route } from 'react-router-dom';
import './ContentWrapper.css';

class ContentWrapper extends Component{
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
            ],
            contentType : [
                         "table"
                        ,"table"
                        ,"table"
                        ,"table"
                        ,"table-combo"
                        ,"table"
            ]
        }
    }

    render(){
        return (
            <div className="ContentWrapper">
                <Route exact path="/"/>
                <Route exact path= {this.state.path[0]}
                    render={() => <Content title = {this.state.title[0]}    contentType={this.state.contentType[0]}  isSearch={true}     isEditable={false}/>}/>
                <Route exact path= {this.state.path[1]}
                    render={() => <Content title = {this.state.title[1]}    contentType={this.state.contentType[1]}  isSearch={true}     isEditable={false}/>}/>
                <Route exact path= {this.state.path[2]}
                    render={() => <Content title = {this.state.title[2]}    contentType={this.state.contentType[2]}  isSearch={true}     isEditable={false}/>}/>
                <Route exact path= {this.state.path[3]}
                    render={() => <Content title = {this.state.title[3]}    contentType={this.state.contentType[3]}  isSearch={false}    isEditable={true}/>}/>
                <Route exact path= {this.state.path[4]}
                    render={() => <Content title = {this.state.title[4]}    contentType={this.state.contentType[4]}  isSearch={false}    isEditable={true}/>}/>
                <Route exact path= {this.state.path[5]}
                    render={() => <Content title = {this.state.title[5]}    contentType={this.state.contentType[5]}  isSearch={true}     isEditable={true}/>}/>
            </div>
        );
    }
}
export default ContentWrapper;