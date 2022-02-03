import { SET_USERS } from "../action-types"

const initialValue = {}

export const usersReducer = (state = initialValue, {type, payload}) => {
    switch (type){
        case SET_USERS:
            return payload;
        
        default: return state;
    }
}