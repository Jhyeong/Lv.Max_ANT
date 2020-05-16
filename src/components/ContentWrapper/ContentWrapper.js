import React, {Component} from 'react';
import {Content} from '../';
import { Route } from 'react-router-dom';
import './ContentWrapper.css';

class ContentWrapper extends Component{
    render(){
        return (
            <div className="ContentWrapper">
                <Route exact path="/"/>
                <Route exact path="/lv-mx-report/searched-stock-items"     
                    render={() => <Content title = "조건검색 조회"    isSearch={true}     isEditable={false}/>}/>
                <Route exact path="/lv-mx-report/trade-result-summary"     
                    render={() => <Content title = "체결결과 요약"    isSearch={true}     isEditable={false}/>}/>
                <Route exact path="/lv-mx-report/trade-result-detail"      
                    render={() => <Content title = "체결결과 상세"    isSearch={true}     isEditable={false}/>}/>
                <Route exact path="/lv-mx-report/common-code"              
                    render={() => <Content title = "공통코드 관리"    isSearch={false}    isEditable={true}/>}/>
                <Route exact path="/lv-mx-report/condition-list"           
                    render={() => <Content title = "조건검색식 관리"  isSearch={true}     isEditable={true}/>}/>
            </div>
        );
    }
}
export default ContentWrapper;