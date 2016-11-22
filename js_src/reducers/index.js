import { combineReducers } from 'redux'
import _ from 'lodash'

import snippetsReducer from './snippetsReducer'
import tagsReducer from './tagsReducer'
import uiDataReducer from './uiDataReducer'
import newSnippetReducer from './newSnippetReducer'

function entities( state = { uiData: {}, snippets: {}, tags: {}, newSnippet: {} }, action) {
  if (action.response && action.response.entities) {
    return _.merge({}, state, action.response.entities)
  }
  return state;
}

const rootReducer = combineReducers({
  entities,
  snippetsReducer,
  tagsReducer,
  uiDataReducer,
  newSnippetReducer
})

export default rootReducer
