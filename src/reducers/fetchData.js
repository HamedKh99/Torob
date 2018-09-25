import { FETCHDATA_REQ_SENT, FETCHDATA_REQ_SUCCESS, FETCHDATA_REQ_ERR } from '../actions/fetchData';

function fetchDataReqReducer(state={loading:false, success:false, error:''}, action) {
    switch(action.type) {
        case FETCHDATA_REQ_SENT : 
            return Object.assign({}, state, {loading:true});
        case FETCHDATA_REQ_SUCCESS :
            return Object.assign({}, state, {loading:false, success: true});
        case FETCHDATA_REQ_ERR :
            return Object.assign({}, state, {loading:false, success:false, error:"Error!!!"});
        default :
            return state;
    }
}

export default fetchDataReqReducer;