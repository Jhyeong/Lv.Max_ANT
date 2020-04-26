import React from 'react';
import './StockListRow.css';

const StockListRow = ({data, index}) => {
    return (
        <tr className="StockListRow">
            <td>
                {index + 1}
            </td>
            <td>
                {data["STOCK_CODE"]}
            </td>
            <td>
                {data["STOCK_NAME"]}
            </td>
            <td>
                {data["SEARCH_DATE"]}
            </td>
            <td>
                {data["CURRENT_PRICE"]}
            </td>
            <td>
                {data["COMPARE_YSTDAY"]}
            </td>
            <td>
                {data["PERCENT"]}
            </td>
        </tr>
    );
};

export default StockListRow;