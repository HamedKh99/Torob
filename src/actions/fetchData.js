import fetchDataRequest from './request';

export const FETCHDATA_REQ_SENT = "FETCHDATA_REQ_SENT";
export const FETCHDATA_REQ_SUCCESS = "FETCHDATA_REQ_SUCCESS";
export const FETCHDATA_REQ_ERR = "FETCHDATA_REQ_ERR";

function fetchDataReqSent() {
    return({
        type : FETCHDATA_REQ_SENT
    })
}

function fetchDataReqSuccess(images) {
    return({
        type : FETCHDATA_REQ_SUCCESS,
        images
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
            dispatch(fetchDataReqSuccess(response.data.image_urls[0].urls));
        }).catch(function(error){
            dispatch(fetchDataReqErr());
        })
    }
}