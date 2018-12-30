const initialState = {
    group1TaskCount : 0,
    group2TaskCount : 0,
}

const UPDATE_GROUP1 = 'UPDATE_GROUP1'
const UPDATE_GROUP2 = 'UPDATE_GROUP2'

export function updateGroup1(count){
    return{
        type: UPDATE_GROUP1,
        payload: count,
    }
}

export function updateGroup2(count){
    return{
        type: UPDATE_GROUP2,
        payload: count,
    }
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_GROUP1:
        let updated1 = state.group1TaskCount = state.group1TaskCount + 1
        return Object.assign({}, state, {group1TaskCount: updated1})
        case UPDATE_GROUP2:
        let updated2 = state.group2TaskCount = state.group2TaskCount + 1
        return Object.assign({}, state, {group2TaskCount: updated2})
        default : return state
    }
}