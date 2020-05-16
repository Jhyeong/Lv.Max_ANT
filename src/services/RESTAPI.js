import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] ='text/plain';
const restServerPath = "https://astute-setting-276721.du.r.appspot.com/";
/**
 * REST API 호출 js
 */
// 조건검색 결과
export function getSearchedStockItems(param){
    return axios.get(restServerPath + "/searched-stock-items", {
        params : param
    });
}

// 체결내역 요약
export function getTradeResultSummary(param){
    return axios.get(restServerPath + "/trade-result-summary",{
        params : param
    });
}

// 체결내역 상세
export function getTradeResultDetail(param){
    return axios.get(restServerPath + "/trade-result-detail",{
        params : param
    });
}

// 공통코드 관리
export function getCommonCode(param){
    return axios.get(restServerPath + "/common-code",{
        params : param
    });
}

// 공통코드 업데이트
export function updateCommonCode(param){
    return axios.put(restServerPath + "/common-code/" + param["NO"], param);
}

// 공통코드 신규 추가
export function insertCommonCode(param){
    return axios.post(restServerPath + "/common-code", param);
}

// 공통코드 삭제
export function deleteCommonCode(param){
    return axios.delete(restServerPath + "/common-code/" + param["NO"], param);
}
