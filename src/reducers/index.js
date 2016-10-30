import { combineReducers } from 'redux';
import _ from 'lodash';

import snippetsReducer from './snippetsReducer';
import tagsReducer from './tagsReducer';
import uiDataReducer from './uiDataReducer';

function entities( state = { uiData: {}, snippets: {}, tags: {} }, action) {
  if (action.response && action.response.entities) {
    return _.merge({}, state, action.response.entities)
  }
  return state;
}

const rootReducer = combineReducers({
  entities,
  snippetsReducer,
  tagsReducer,
  uiDataReducer
})

export default rootReducer
