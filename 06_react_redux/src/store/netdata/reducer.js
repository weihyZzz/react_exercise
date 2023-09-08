import * as actionTypes from "./constants"

const initState = {
    goods: [],
    user: []
}

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_GODDS:
            return { ...state, goods: action.goods  }
        case actionTypes.CHANGE_USER:
            return { ...state, user: action.user }
        default:
            return state
    }
}
export default reducer