import { GET_USERS, UPDATE_DATE_RANGES, USER_FILTER, UPDATE_USER_IDS } from '../actions/types';

const initialState = {
    users: [],
    user: {},
    loading: false,
    startDate: false,
    endDate: false,
    userFilter: false,
    userIds: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                userSearch: false
            }
        case USER_FILTER:
            return {
                ...state,
                userFilter: action.payload.userFilter
            }
        case UPDATE_DATE_RANGES:
            return {
                ...state,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate
            }
        case UPDATE_USER_IDS:
            return {
                ...state,
                userIds: action.payload.userIds
            }
        default:
            return state;
    }
}