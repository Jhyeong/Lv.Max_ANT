import React, {Component} from 'react';
import {ContentTable} from '../';
import './Content.css';
import 'date-fns';
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import * as service from '../../services/RESTAPI';

class Content extends Component{
    constructor(props){
        super(props);
        const dateUtil = new DateFnsUtils();
        
        this.state = {
            data : [],
            startDate : dateUtil.format(dateUtil.addDays(new Date(), -7), "yyyy-MM-dd"),
            endDate : dateUtil.format(new Date(), "yyyy-MM-dd")
        }

        // 초기 조회
        this.initData();
    }

    // 조회 시작일
    handleStartDateChange(date){
        this.setState({
            startDate : date
        });
    }

    // 조회 종료일
    handleEndDateChange(date){
        this.setState({
            endDate : date
        });
    }

    // 조회 버튼 클릭
    onClickSearch(e){
        this.initData();
    }
    
    // REST API 호출
    initData = async () => {
        const path = window.location.pathname;
        const param = {
            startDate : this.state.startDate,
            endDate : this.state.endDate
        };
        let result = [];
        switch(path){
            case "/searched-stock-items":
                result = await service.getSearchedStockItems(param);
                break;
            case "/trade-result-summary" :
                result = await service.getTradeResultSummary(param);
                break;
            case "/trade-result-detail" :
                result = await service.getTradeResultDetail(param);
                break;
            case "/common-code" :
                result = await service.getCommonCode(param);
                break;    
            default :
                break;
        }
        
        this.setState({
            data : result.data
        });
    };
    
    // 추가버튼 클릭 시 호출
    async insertHandler(data, e){
        let response;
        const path = window.location.pathname;
        switch(path){
            case "/common-code" :
                response = await service.insertCommonCode(data);
                break;    
            default :
                break;
        }

        if(response.data == 0){
            alert("추가 중 에러가 발생했습니다.");
        }else{
            alert("추가가 완료되었습니다.");
        }

        this.initData();
    }

    // 삭제버튼 클릭 시 호출
    async deleteHandler(data, e){
        let response;
        const currentMenu = window.location.pathname;
        switch(currentMenu){
            case "/common-code" : 
                response = await service.deleteCommonCode(data);
                break;
            default :
                break;
        }

        if(response.data == 0){
            alert("삭제 중 에러가 발생했습니다.");
        }else{
            alert("삭제가 완료되었습니다.");
        }

        this.initData();
    }

    render(){
        return (
            <div className="Content">
                <div className="ContentHeader">
                    <div>
                        {/* Content 제목 */}
                        {this.props.title}
                    </div>
                    <div className={this.props.isSearch?"isSearch":"isNotSearch"}>
                        {/* 날짜 조건 */}
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                format="yyyy-MM-dd"
                                margin="normal"
                                id="date-picker-dialog"
                                label="시작일"
                                value={this.state.startDate}
                                onChange={this.handleStartDateChange.bind(this)}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <div className="dash">
                        ~
                        </div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="yyyy-MM-dd"
                                margin="normal"
                                id="date-picker-dialog"
                                label="종료일"
                                value={this.state.endDate}
                                onChange={this.handleEndDateChange.bind(this)}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <Button
                            variant="contained"
                            color="primary"
                            className={"SearchBtn"}
                            startIcon={<SendIcon>send</SendIcon>}
                            onClick = {this.onClickSearch.bind(this)}
                        >
                            조회
                        </Button>
                    </div>
                </div>
                <div className="ContentBody">
                    {/* Content 내용 */}
                    <ContentTable 
                        rowData = {this.state.data} 
                        isEditable={this.props.isEditable}
                        insertHandler={this.insertHandler.bind(this)}
                        deleteHandler={this.deleteHandler.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default Content;