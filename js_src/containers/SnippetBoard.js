import { connect } from 'react-redux';
import DashBoard from '../components/SnippetBoard';

const mapStateToProps = (state) => {
  return {
    uiData: state.uiDataReducer,
    snippets: state.snippetsReducer,
    tags: state.tagsReducer,
    newSnippet: state.newSnippetReducer
  }
}

const SnippetBoard = connect(mapStateToProps)(DashBoard)

export default SnippetBoard
