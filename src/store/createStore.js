import { createStore, applyMiddleware, compose } from 'redux'
import makeRootReducer from './reducers'


export default (initialState = {}) => {

    const middleware = []
    const enhancers = []

    const store = createStore(
        makeRootReducer(),
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )
    )

    return store
}