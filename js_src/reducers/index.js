import { combineReducers } from 'redux'
import _ from 'lodash'

import snippetsReducer from './snippetsReducer'
import tagsReducer from './tagsReducer'
import uiDataReducer from './uiDataReducer'
import newSnippetReducer from './newSnippetReducer'

const rootReducer = combineReducers({
  snippetsReducer,
  tagsReducer,
  uiDataReducer,
  newSnippetReducer
})

export default rootReducer
