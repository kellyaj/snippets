import { connect } from 'react-redux';
import DashBoard from '../components/SnippetBoard';

import { showAddSnippetForm, hideAddSnippetForm } from '../actions/ActionCreators';


const mapStateToProps = (state) => {
  return {
    uiData: state.uiDataReducer,
    snippets: state.snippetsReducer,
    tags: state.tagsReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showAddSnippetForm: () => {
      dispatch(showAddSnippetForm())
    },
    hideAddSnippetForm: () => {
      dispatch(hideAddSnippetForm())
    }
  }
}

const SnippetBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard)

export default SnippetBoard
