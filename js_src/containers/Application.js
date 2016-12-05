import { connect } from 'react-redux';
import Application from '../components/Application';

const mapStateToProps = (state) => {
  return {
    uiData: state.uiDataReducer,
    snippets: state.snippetsReducer,
    tags: state.tagsReducer,
    newSnippet: state.newSnippetReducer
  }
}

const App = connect(mapStateToProps)(Application)

export default App
