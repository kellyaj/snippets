import { expect } from 'chai'
import newSnippetReducer from '../../js_src/reducers/newSnippetReducer'
import {
  ADD_SNIPPET_SUCCESS,
  ADD_TAG_TO_NEW_SNIPPET,
  REMOVE_TAG_FROM_NEW_SNIPPET,
} from '../../js_src/actions/ActionTypes'

describe('snippetsReducer', () => {
  it('returns the newSnippet by default', () => {
    const newSnippet = { name: "some snippet" }
    const action = { type: "SOME_UNRELATED_TYPE" }
    expect(
      newSnippetReducer(newSnippet, action)
    ).to.eql(newSnippet)
  })

  it('sets the newSnippet to a blank newSnippet after a snippet was successfully added', () => {
    const newSnippet = { name: "some snippet" }
    const action = { type: ADD_SNIPPET_SUCCESS }
    expect(
      newSnippetReducer(newSnippet, action)
    ).to.eql({ tags: [] })
  })

  it('adds a tag to the new snippet tag array', () => {
    const tagId = 504
    const newSnippet = { name: "some snippet", tags: [] }
    const action = { type: ADD_TAG_TO_NEW_SNIPPET, tagId: tagId }
    expect(
      newSnippetReducer(newSnippet, action)
    ).to.eql(Object.assign({}, newSnippet, { tags: [tagId] } ))
  })

  it('removes a tag from the new snippet tag array', () => {
    const tagId = 504
    const newSnippet = { name: "some snippet", tags: [206, 504, 123] }
    const action = { type: REMOVE_TAG_FROM_NEW_SNIPPET, tagId: tagId }
    expect(
      newSnippetReducer(newSnippet, action)
    ).to.eql(Object.assign({}, newSnippet, { tags: [206, 123] } ))
  })
})
