import Types from "./types";

const iState = {}

const SharedReducer = (state = iState, action) => {
    switch (action.type) {
        case Types.GET_EMPLOYE_LIST:
            return { ...state, employesList: action.payload };
        case Types.IS_LOADING_MODAL:
            return { ...state, isLoding: action.payload };
        default:
            return state;
    }
}

export default SharedReducer;