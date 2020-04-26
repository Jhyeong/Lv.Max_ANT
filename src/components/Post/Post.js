import React from 'react';
import './Post.css';
import { StockList } from '../';

const Post = ({resultDataList}) => (
    <div className="Post">
        <h1>조건검색 조회</h1>
        <p>
            
        </p>
        <StockList resultDataList={resultDataList}/>
    </div>
);

export default Post;