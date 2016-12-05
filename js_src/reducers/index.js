import { combineReducers } from 'redux'
import _ from 'lodash'

import snippetsReducer from './snippetsReducer'
import tagsReducer from './tagsReducer'
import uiDataReducer from './uiDataReducer'
import newSnippetReducer from './newSnippetReducer'
import selectedBoardReducer from './selectedBoardReducer'
import boardsReducer from './boardsReducer'

const rootReducer = combineReducers({
  snippetsReducer,
  tagsReducer,
  uiDataReducer,
  newSnippetReducer,
  selectedBoardReducer,
  boardsReducer,
})

export default rootReducer
