import Types from "./types";

const getEmployesList = (payload) => {
    return {
        type: Types.GET_EMPLOYE_LIST,
        payload: payload
    }
}

const isLogingModal = (payload) => {
    return {
        type: Types.IS_LOADING_MODAL,
        payload: payload
    }
}

export default { getEmployesList, isLogingModal }