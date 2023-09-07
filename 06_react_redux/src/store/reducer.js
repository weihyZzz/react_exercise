import * as actionTypes from "./constants"

const initState = {
    counter: 100,
    goods: []
}

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.ADD_NUMBER:
            return { ...state, counter: state.counter + action.num }
        case actionTypes.SUB_NUMBER:
            return { ...state, counter: state.counter - action.num }
        case actionTypes.CHANGE_GODDS:
            return { ...state, goods: action.goods  }
        default:
            return state
    }
}

export default reducer