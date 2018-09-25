import { FETCHDATA_REQ_SENT, FETCHDATA_REQ_SUCCESS, FETCHDATA_REQ_ERR } from '../actions/fetchData';

const errorMessage = "متاسفانه مشکلی در ارتباط شما با اینترنت به وجود آمده است";

function fetchDataReqReducer(state={loading:false, success:false, error:'', images:[]}, action) {
    switch(action.type) {
        case FETCHDATA_REQ_SENT : 
            return Object.assign({}, state, {loading:true});
        case FETCHDATA_REQ_SUCCESS :
            return Object.assign({}, state, {loading:false, success: true, images:action.images});
        case FETCHDATA_REQ_ERR :
            return Object.assign({}, state, {loading:false, success:false, error:errorMessage});
        default :
            return state;
    }
}

export default fetchDataReqReducer;