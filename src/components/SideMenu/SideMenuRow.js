import React, {Component} from 'react';
import './SideMenuRow.css';
import { Link } from 'react-router-dom';

/**
 * 메뉴 row
 */
class SideMenuRow extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            title : ["조건검색 조회", "체결결과 요약", "체결결과 상세", "공통코드 관리", "조건검색식 관리"]
        };
    }
    
    render(){
        return (
            <Link to={this.props.path}>
                <div className={this.props.selectedId === this.props.id? "active item" : "item"}
                    onClick={this.props.onClickHandler}
                    id={this.props.id}>
                    {this.state.title[this.props.id]}
                </div>
            </Link>
        );
    }

}

export default SideMenuRow;