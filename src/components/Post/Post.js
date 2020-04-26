import React, { Component } from 'react';
import './Post.css';
import { StockList } from '../';


const Post = ({resultDataList, title}) =>(
    <div className="Post">
        <h1>{title}</h1>
        <StockList resultDataList={resultDataList}/>
    </div>
)

export default Post;