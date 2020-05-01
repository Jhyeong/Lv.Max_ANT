import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import './ContentTable.css';
import NumberFormat from 'react-number-format';

class ContentTable extends Component{

  constructor(props){
    super(props);
    this.state = {
      headers : {
        "/searched-stock-items" : ["종목코드", "종목명", "검색일", "현재가", "전일대비", "등락률"],
        "/trade-result-detail"  : ["종목코드", "종목명", "체결일자", "주문구분", "체결수량", "체결단가"],
        "/trade-result-summary" : ["체결일자", "총매수금액", "총매도금액", "총수익", "총수익률", "총 D+2예수금"]
      },
      columns : {
        "/searched-stock-items"  : ["STOCK_CODE", "STOCK_NAME", "SEARCH_DATE", "CURRENT_PRICE", "COMPARE_YSTDAY", "PERCENT"],
        "/trade-result-summary"  : ["SEARCH_DATE", "TOTAL_BUY_PRICE", "TOTAL_SELL_PRICE", "TOTAL_PROFIT", "TOTAL_PERCENT", "TOTAL_DEPOSIT"],
        "/trade-result-detail"   : ["STOCK_CODE", "STOCK_NAME", "SEARCH_DATE", "ORDER_TYPE", "TRADE_CNT", "TRADE_PRICE"]
      },
      columnType : {
        "number"  : ["CURRENT_PRICE", "COMPARE_YSTDAY", "TOTAL_BUY_PRICE", "TOTAL_SELL_PRICE", "TOTAL_PROFIT", "TOTAL_DEPOSIT", "TRADE_PRICE"],
        "percent" : ["PERCENT", "TOTAL_PERCENT"]
      }
    }
  }
  
  render(){
      if(typeof this.props.rowData == "undefined" || this.props.rowData.length == 0){
        return(
          <TableContainer component={Paper} className="ContentTableContainer">
              <Table className="ContentTable" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {this.state.headers[window.location.pathname].map((data) => {
                      return <TableCell>{data}</TableCell>
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
        );
      }else{
        return(
              <TableContainer component={Paper}>
                <Table className="ContentTable" aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {this.state.headers[window.location.pathname].map((data) => {
                        return <TableCell>{data}</TableCell>
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      {this.props.rowData.map((data) => {
                        return (
                          <TableRow>
                            {this.state.columns[window.location.pathname].map((column, idx) => {
                              let classValue = "";
                              
                              if(this.state.columnType["number"].indexOf(column) > -1 ){
                                return <TableCell className={classValue}><NumberFormat value={data[column]} displayType={'text'} thousandSeparator={true} suffix={'원'} /></TableCell>
                              }else if(this.state.columnType["percent"].indexOf(column) > -1 ){
                                if(parseInt(data[column]) >= 0){
                                  classValue = "plus"; 
                                }else{
                                  classValue = "minus";
                                }
                                return <TableCell className={classValue}><NumberFormat value={data[column]} displayType={'text'} thousandSeparator={true} suffix={'%'} /></TableCell>
                              }else{
                                return <TableCell className={classValue}>{data[column]}</TableCell>
                              }
                            })}
                          </TableRow>
                        )
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
        );
      }
    }

}

export default ContentTable;