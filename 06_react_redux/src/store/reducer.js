import * as actionTypes from "./constants"

const initState = {
    counter: 100,
    goods: [],
    user: []
}

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.ADD_NUMBER:
            return { ...state, counter: state.counter + action.num }
        case actionTypes.SUB_NUMBER:
            return { ...state, counter: state.counter - action.num }
        case actionTypes.CHANGE_GODDS:
            return { ...state, goods: action.goods  }
        case actionTypes.CHANGE_USER:
            return { ...state, user: action.user }
        default:
            return state
    }
}

export default reducer