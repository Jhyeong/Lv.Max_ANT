import React, {Component} from 'react';
import {Content} from '../';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './ContentWrapper.css';

class ContentWrapper extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="ContentWrapper">
                <Route exact path="/"/>
                <Route exact path="/searched-stock-items"     render={()=> <Content title = "조건검색 조회" isSearch={true} isEditable={false}/>}/>
                <Route exact path="/trade-result-summary"     render={()=> <Content title = "체결결과 요약" isSearch={true} isEditable={false}/>}/>
                <Route exact path="/trade-result-detail"      render={()=> <Content title = "체결결과 상세" isSearch={true} isEditable={false}/>}/>
                <Route exact path="/common-code"              render={()=> <Content title = "공통코드 관리" isSearch={false} isEditable={true}/>}/>
            </div>
        );
    }
}
export default ContentWrapper;