import React from 'react';
import {StockListRow} from '../';
import './StockList.css';

const StockList = ({resultDataList}) => {
    let dataList;
    
    /** 조회된 데이터 리스트를 이용해 row 생성*/
    if(resultDataList){
        dataList = resultDataList.map((data, index) => (
            <StockListRow 
                key = {index}
                data = {data}
                index = {index}
            />
        ));
    }

    return (
        <table className="ui yellow table">
            <tbody>
                <tr>
                    <td>No</td>
                    <td>종목코드</td>
                    <td>종목명</td>
                    <td>검색일</td>
                    <td>현재가</td>
                    <td>전일대비</td>
                    <td>등락률</td>
                </tr>
                {dataList}
            </tbody>
        </table>
    );
};


export default StockList;