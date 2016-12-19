import { combineReducers } from 'redux'

export const makeRootReducer = () => {
    return combineReducers({
        foo: (state, action) => 'bar'
    })
}

export default makeRootReducer