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

// 체결내역 요약
export function getTradeResultSummary(param){
    return axios.get("/trade-result-summary",{
        params : param
    });
}

// 체결내역 상세
export function getTradeResultDetail(param){
    return axios.get("/trade-result-detail",{
        params : param
    });
}

// 공통코드 관리
export function getCommonCode(param){
    return axios.get("/common-code",{
        params : param
    });
}

// 공통코드 업데이트
export function updateCommonCode(param){
    return axios.put("/common-code/" + param["NO"], param);
}

// 공통코드 신규 추가
export function insertCommonCode(param){
    return axios.post("/common-code", param);
}

// 공통코드 삭제
export function deleteCommonCode(param){
    return axios.delete("/common-code/" + param["NO"], param);
}
