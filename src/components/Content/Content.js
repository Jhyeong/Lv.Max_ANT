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
            startDate : dateUtil.format(new Date(), "yyyy-MM-dd"),
            endDate : dateUtil.format(new Date(), "yyyy-MM-dd")
        }
    }
    // 조회 시작일
    handleStartDateChange = function(date){
        this.setState({
            startDate : date
        });
    }
    // 조회 종료일
    handleEndDateChange = function(date){
        this.setState({
            endDate : date
        });
    }
    // 조회 버튼 클릭
    onClickSearch = function(e){
        this.callRestAPI();
    }  

    // REST API 호출
    callRestAPI = async () => {
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
            default :
                break;
        }
        
        this.setState({
            data : result.data
        });
    };

    render(){

        return (
            <div className="Content">
                <div className="ContentHeader">
                    <div>
                        {/* Content 제목 */}
                        {this.props.title}
                    </div>
                    <div>
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
                            color="secondary"
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
                    <ContentTable rowData = {this.state.data}></ContentTable>
                </div>
            </div>
        );
    }
}

// let mapStateToProps = (state) => {
//     return {
//         data: state.counter.value
//     };
// }

// Content = connect(mapStateToProps)(Content);

export default Content;