import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './ContentTable.css';
import NumberFormat from 'react-number-format';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class ContentTable extends Component{

  constructor(props){
    super(props);

    this.state = {
      headers : {
        "/lv-mx-report/searched-stock-items" : ["종목코드", "종목명", "검색일", "현재가", "전일대비", "등락률"],
        "/lv-mx-report/trade-result-detail"  : ["종목코드", "종목명", "체결일자", "주문구분", "체결수량", "체결단가"],
        "/lv-mx-report/trade-result-summary" : ["체결일자", "총매수금액", "총매도금액", "총수익", "총수익률", "총 D+2예수금"],
        "/lv-mx-report/common-code"          : ["NO", "영문코드명", "한글코드명", "코드 값", "설명"],
        "/lv-mx-report/condition-list"       : ["NO", "조건명", "조건식", "설정일"]
      },
      columns : {
        "/lv-mx-report/searched-stock-items"  : ["STOCK_CODE", "STOCK_NAME", "SEARCH_DATE", "CURRENT_PRICE", "COMPARE_YSTDAY", "PERCENT"],
        "/lv-mx-report/trade-result-summary"  : ["SEARCH_DATE", "TOTAL_BUY_PRICE", "TOTAL_SELL_PRICE", "TOTAL_PROFIT", "TOTAL_PERCENT", "TOTAL_DEPOSIT"],
        "/lv-mx-report/trade-result-detail"   : ["STOCK_CODE", "STOCK_NAME", "SEARCH_DATE", "ORDER_TYPE", "TRADE_CNT", "TRADE_PRICE"],
        "/lv-mx-report/common-code"           : ["NO", "CODE_NAME_ENG", "CODE_NAME_KOR", "CODE_VALUE", "COMMENT"],
        "/lv-mx-report/condition-list"        : ["NO", "CONDITION_NAME", "CONDITION_EXPRESSION", "REG_DATE"]
      },
      columnType : {
        "stockCode" : ["STOCK_CODE"],
        "number"  : ["CURRENT_PRICE", "COMPARE_YSTDAY", "TOTAL_BUY_PRICE", "TOTAL_SELL_PRICE", "TOTAL_PROFIT", "TOTAL_DEPOSIT", "TRADE_PRICE"],
        "percent" : ["PERCENT", "TOTAL_PERCENT"]
      },
      insertMode : this.props.insertMode,
      editMode : this.props.editMode,
      deleteMode : this.props.deleteMode,
      selectedEditRowIdx : null
    }

    if(this.props.isEditable){
      this.state.headers[window.location.pathname].unshift("EDIT");
      this.state.columns[window.location.pathname].unshift("EDIT");
    }

    //수정한 데이터를 저장할 json객체
    this.currentInsertData = {};
    this.currentUpdateData = {};
  }

   //수정 버튼 클릭
  onClickUpdate(data, e){
    if(!this.state.editMode){
      //현재 값 셋팅
      this.currentUpdateData = data;
      
      this.setState({
        editMode : true,
        selectedEditRowIdx : parseInt(e.currentTarget.id, 10)
      });
    }
  }

  //취소 버튼 클릭
  onClickCancel(e){
    if(this.state.editMode === true){
      this.setState({
        editMode : false,
        selectedEditRowIdx : null
      });
    }
    if(this.state.insertMode === true){
      this.setState({
        insertMode : false
      });
    }
  }

  // 추가 버튼 클릭
  onClickInsert(e){
    this.setState({
      insertMode : true
    });
  }

  //추가 저장시 호출
  async onClickInsertSave(e){
    await this.props.insertHandler(this.currentInsertData, e);

    if(this.props.isReload){
      this.setState({
        insertMode : false
      });
    }
  }

  //수정 저장시 호출
  async onClickUpdateSave(){
    await this.props.updateHandler(this.currentUpdateData);
    
    if(this.props.isReload){
      this.setState({
        editMode : false
      });
    }
  }

  //삭제 시 호출
  async onClickDelete(data, e){
    if(window.confirm("선택한 데이터를 삭제하시겠습니까?")){
      await this.props.deleteHandler(data, e);

      if(this.props.isReload){
        this.setState({
          insertMode : false
        });
      }
    }
  }

  //텍스트 필드 수정 시 호출
  onEditChangeHandler(e){
    const fieldName = e.target.name;
    this.currentUpdateData[fieldName] = e.target.value;
  }
  
  //텍스트 필드 추가 시 호출
  onInsertChangeHandler(e){
    const fieldName = e.target.name;
    this.currentInsertData[fieldName] = e.target.value;
  }
  
  render(){
    // 데이터가 없는 경우
      if(typeof this.props.rowData === "undefined" || this.props.rowData.length === 0){
        return(
          <TableContainer component={Paper} className="ContentTableContainer">
              <Table className="ContentTable" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {this.state.headers[window.location.pathname].map((data, idx) => {
                      return <TableCell key={data + idx}>{data}</TableCell>
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
        // 데이터가 존재하는 경우
        return(
              <TableContainer component={Paper}>
                <Table className="ContentTable" aria-label="simple table">
                  <caption>
                    {!this.state.insertMode?
                    <Button
                            variant="contained"
                            color="secondary"
                            className={"editBtn"}
                            startIcon={<AddCircleIcon></AddCircleIcon>}
                            onClick = {this.onClickInsert.bind(this)}
                        >
                            추가
                    </Button>
                    :
                    <Button
                            variant="contained"
                            color="secondary"
                            className={"editBtn"}
                            startIcon={<SaveIcon></SaveIcon>}
                            onClick = {this.onClickInsertSave.bind(this)}
                        >
                            저장
                    </Button>
                    }
                  </caption>
                  {/* 테이블 헤더 */}
                  <TableHead>
                    <TableRow>
                      {this.state.headers[window.location.pathname].map((data, idx) => {
                        return <TableCell key={data + idx}>{data}</TableCell>
                      })}
                    </TableRow>
                  </TableHead>
                  {/* 테이블 바디 */}
                  <TableBody>
                      {this.props.rowData.map((data, rowIdx) => {
                        return (
                          <TableRow key = {data + rowIdx}>
                            {this.state.columns[window.location.pathname].map((column, idx) => {
                              //수정 버튼 필드 추가
                              if(this.props.isEditable && column === "EDIT"){
                                if(this.state.editMode === true && rowIdx === this.state.selectedEditRowIdx){
                                  return (
                                    <TableCell key={column + idx}>
                                      <IconButton color="secondary" id={rowIdx} name={"save"+rowIdx} onClick={() => this.onClickUpdateSave(data)}>
                                        {/* 저장 */}
                                        <SaveIcon/>
                                      </IconButton>
                                      <IconButton color="secondary" id={rowIdx} name={"cancel"+rowIdx} onClick={this.onClickCancel.bind(this)}>
                                        {/* 취소 */}
                                        <CancelIcon/>
                                      </IconButton>
                                    </TableCell>
                                  )
                                }else{
                                  return (
                                    <TableCell key={column + idx}>
                                      <IconButton color="secondary" id={rowIdx} name={"edit"+rowIdx} onClick={this.onClickUpdate.bind(this, data)}>
                                        {/* 수정 */}
                                        <EditIcon/>
                                      </IconButton>
                                      <IconButton color="secondary" id={rowIdx} name={"delete"+rowIdx} onClick={this.onClickDelete.bind(this, data)}>
                                        {/* 삭제 */}
                                        <DeleteForeverIcon/>
                                      </IconButton>
                                    </TableCell>
                                  )
                                }
                              ;}
                                
                              //수정 모드일 때 TEXT FIELD 출력
                              if(this.state.editMode === true && rowIdx === this.state.selectedEditRowIdx){
                                // NO컬럼은 disabled
                                if(column === "NO"){
                                  return (<TableCell>
                                            <TextField disabled id="standard-secondary" label={column} color="secondary" defaultValue={data[column]}/>
                                        </TableCell>)
                                }else{
                                  return (<TableCell>
                                            <TextField id="standard-secondary" name={column} label={column} color="secondary" defaultValue={data[column]} onChange={this.onEditChangeHandler.bind(this)}/>
                                          </TableCell>)
                                }
                              }else{
                                //수정 모드가 아닐 때 일반 FIELD 출력
                                // 숫자 포맷
                                if(this.state.columnType["number"].indexOf(column) > -1 ){
                                  return <TableCell key = {column + idx}><NumberFormat value={data[column]} displayType={'text'} thousandSeparator={true} suffix={'원'} /></TableCell>
                                }else if(this.state.columnType["percent"].indexOf(column) > -1 ){
                                  let classValue = "";
                                  // 퍼센트 포맷
                                  // 양수는 빨간색, 음수는 파란색
                                  if(parseFloat(data[column]) >= 0){
                                    classValue = "plus"; 
                                  }else{
                                    classValue = "minus";
                                  }
                                  return <TableCell key = {column + idx} className={classValue}><NumberFormat value={data[column]} displayType={'text'} thousandSeparator={true} suffix={'%'} /></TableCell>
                                }else if(this.state.columnType["stockCode"].indexOf(column) > -1 ){
                                  // 네이버 링크
                                  return <TableCell key = {data + idx}>
                                          <a href={"https://finance.naver.com/item/main.nhn?code=" + data[column].padStart(6, "0")} 
                                             target="_blank" 
                                             rel="noopener noreferrer">
                                              {data[column].padStart(6, "0")}
                                          </a></TableCell>
                                }else{
                                  //그 외 일반 필드
                                  return <TableCell key = {data + idx}>{data[column]}</TableCell>
                                }
                              }
                            })}
                          </TableRow>
                        )
                      })}
                      {/* 추가 */}
                      <TableRow>
                        {this.state.insertMode?
                        this.state.columns[window.location.pathname].map((column, idx) => {
                          if(column === "EDIT"){
                            return (
                              // 취소 버튼
                              <TableCell>
                                <IconButton color="secondary" id={idx} name={"cancel"+idx} onClick={this.onClickCancel.bind(this)}>
                                  <CancelIcon/>
                                </IconButton>
                              </TableCell>
                              );
                          }else{
                            return (
                              // 추가 버튼
                              <TableCell>
                                <TextField id="standard-secondary" name={column} label={column} color="secondary" onChange={this.onInsertChangeHandler.bind(this)}/>
                              </TableCell>
                            );
                          }
                        })
                        :null}
                      </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
        );
      }
    }

}

export default ContentTable;