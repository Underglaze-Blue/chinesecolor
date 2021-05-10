import { createStore, combineReducers } from 'redux'

import colorStore from './colors/colorReducer'

const reducer = combineReducers({
  colorStore
})

const store = createStore(reducer)

export default store
