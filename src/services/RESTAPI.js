import axios from 'axios';
/**
 * REST API 호출 js
 */
// 조건검색 결과
export function getSearchedStockItems(param){
    return axios.get("/searched-stock-items", {
        params : param
    });
}
// 체결내역 상세
export function getTradeResultDetail(param){
    return axios.get("/trade-result-detail",{
        params : param
    });
}
// 체결내역 요약
export function getTradeResultSummary(param){
    return axios.get("/trade-result-summary",{
        params : param
    });
}