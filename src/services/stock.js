import axios from 'axios';

export function getSearchedStockItems(){
    return axios.get("/searchedstockitem");
}