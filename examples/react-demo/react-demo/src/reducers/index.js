import { combineReducers } from "redux";

const initialState = {
    gists: [],
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            const newUsers = !state.users.includes(action.users) ? state.users.concat(action.users) : state.users;
            return {
                ...state,
                users: newUsers
            }
        case 'LOADING_USERS':
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state;
    }
}

const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_GISTS':
            return {
                ...state,
                gists: action.gists
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({ gistsReducer, usersReducer })

export default rootReducer;