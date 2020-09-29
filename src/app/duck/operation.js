import Action from './action'
import { store } from '../store';
import axios from "axios";


const getEmployesList = async () => {
    const resp = await axios.get(`https://reqres.in/api/users?delay=3`)
    try {
        const resData = resp;
        if (resData?.data) {
            console.log("employes list: ", resData)
            store.dispatch(Action.isLogingModal(false))
            store.dispatch(Action.getEmployesList(resData?.data?.data))
            return resData;
        }
    } catch (error) {
        return error;
    }
}

export default { getEmployesList }