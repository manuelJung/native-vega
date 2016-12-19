import React from 'react'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'
import createPages from './pages/createPages'



export default (device) => {

    const initialState = {}
    const store = createStore(initialState)
    const pages = createPages(store)

    return <AppContainer store={store} pages={pages}/>
}