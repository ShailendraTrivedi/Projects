import { fetchUser } from "../utils/fetchLocalStorageData";
const userInfo = fetchUser()
// const userInfo = localStorage.getItem('user') !== 'undefined'
//     ? JSON.parse(localStorage.getItem('user'))
//     : localStorage.clear();
const initialState = {
    user: userInfo,
    // user : null,
}
const actionType = {
    SET_USER: 'SET_USER'
}
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
}
export default reducer;
export { initialState, actionType };