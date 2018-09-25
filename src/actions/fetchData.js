import fetchDataRequest from './request';

export const FETCHDATA_REQ_SENT = "FETCHDATA_REQ_SENT";
export const FETCHDATA_REQ_SUCCESS = "FETCHDATA_REQ_SUCCESS";
export const FETCHDATA_REQ_ERR = "FETCHDATA_REQ_ERR";

function fetchDataReqSent() {
    return({
        type : FETCHDATA_REQ_SENT
    })
}

function fetchDataReqSuccess() {
    return({
        type : FETCHDATA_REQ_SUCCESS
    })
}

function fetchDataReqErr() {
    return({
        type : FETCHDATA_REQ_ERR
    })
}

export function requestFetchData() {
    return async (dispatch) => {
        dispatch(fetchDataReqSent());
        await fetchDataRequest()
        .then(function(response){
            console.warn(response.data);
            dispatch(fetchDataReqSuccess());
        }).catch(function(error){
            dispatch(fetchDataReqErr());
        })
    }
}