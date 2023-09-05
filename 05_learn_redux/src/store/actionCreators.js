const { CHANGE_COUNT, CHANGE_NAME } = require("./constants")

const changeCountAction = (counter) => {
    return {
        type: CHANGE_COUNT,
        counter
    }
}

const changeNameAction = (name) => {
    return {
        type: CHANGE_NAME,
        name
    }
}

module.exports = {
    changeCountAction,
    changeNameAction
}