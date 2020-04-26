import React, { Component } from 'react';
import {PostWrapper, Post} from '../../components';
import * as service from '../../services/stock';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

class ContentContainer extends Component{

    constructor(props){
        super();
        this.state = {
            dataList : []
        }
    }

    componentDidMount(){
        this.getSearchedStockItems();
    }

    getSearchedStockItems = async () => {
        const result = await Promise.all([
            service.getSearchedStockItems()
        ]);
        
        this.setState({
            resultDataList : result[0].data
        });
    };

    render(){
        const resultDataList = this.state.resultDataList;

        return (
            <PostWrapper>
                <Route exact path="/"/>
                <Route exact path="/searchedstockitems" render={()=> <Post resultDataList = {resultDataList} title="조건검색 조회"/>}/>
                <Route exact path="/checkbalance"       render={()=> <Post resultDataList = {resultDataList} title="정산결과 조회"/>}/>
            </PostWrapper>
        );
    }
}

export default ContentContainer;