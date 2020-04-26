import React, { Component } from 'react';
import {PostWrapper, Navigate, Post} from '../../components';
import * as service from '../../services/stock';

class PostContainer extends Component{

    constructor(props){
        super();
        this.state = {
            fetching : true, //요청 중
            dataList : []
        }
    }

    componentDidMount(){
        this.getSearchedStockItems();
    }

    getSearchedStockItems = async () => {
        this.setState({
            fetching :true
        });

        const result = await Promise.all([
            service.getSearchedStockItems()
        ]);
        
        this.setState({
            fetching : false, //요청 완료
            resultDataList : result[0].data
        });
    };

    render(){
        const {fetching, resultDataList} = this.state;

        return (
            <PostWrapper>
                <Navigate 
                    disabled={fetching}
                />
                <Post
                    resultDataList = {resultDataList}
                />
            </PostWrapper>
        );
    }
}

export default PostContainer;