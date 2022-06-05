import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { usersReducer } from './reducers/userReducer'
import { alertsReducer } from './reducers/alertsReducer'
import { postReducer } from './reducers/postReducer'
const rootReducer = combineReducers({
  usersReducer: usersReducer,
  alertsReducer: alertsReducer,
  postReducer:postReducer
})

const middleware = [thunk]
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
