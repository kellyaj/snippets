import { expect } from 'chai'
import snippetsReducer from '../../js_src/reducers/snippetsReducer'
import {
  ADD_SNIPPET_SUCCESS,
  GET_SNIPPET_SUCCESS,
  REMOVE_SNIPPET_SUCCESS
} from '../../js_src/actions/ActionTypes'

describe('snippetsReducer', () => {
  it('returns snippets by default', () => {
    const snippets = { "123": { name: "some snippet" }}
    const action = { type: "SOME_UNRELATED_TYPE" }
    expect(
      snippetsReducer(snippets, action)
    ).to.eql(snippets)
  })

  it('can add new snippets', () => {
    const id = "123"
    const snippet = {
      id: id,
      name: "some name"
    }
    const action = {
      type: ADD_SNIPPET_SUCCESS,
      response: snippet
    }
    expect(
      snippetsReducer({}, action)
    ).to.eql({
      "123": snippet
    })
  })

  it('adds snippets after initial retrieval', () => {
    const snippets = {
      "123": { name: "some snippet" },
      "456": { name: "snippet snip" }
    }
    const action = {
      type: GET_SNIPPET_SUCCESS,
      response: snippets
    }
    expect(
      snippetsReducer({}, action)
    ).to.eql(snippets)
  })

  it('removes snippets after deletion', () => {
    const snippetId = "456"
    const snippets = {
      "123": { name: "some snippet", id: "123" },
      "456": { name: "snippet snip", id: snippetId }
    }
    const action = {
      type: REMOVE_SNIPPET_SUCCESS,
      response: { id: snippetId, deleted: true }
    }
    expect(
      snippetsReducer(snippets, action)
    ).to.eql({ "123": { name: "some snippet", id: "123" } })
  })

  it('does not removes snippets after ignored deletion', () => {
    const snippetId = "456"
    const snippets = {
      "123": { name: "some snippet", id: "123" },
      "456": { name: "snippet snip", id: snippetId }
    }
    const action = {
      type: REMOVE_SNIPPET_SUCCESS,
      response: { id: snippetId, deleted: false }
    }
    expect(
      snippetsReducer(snippets, action)
    ).to.eql(snippets)
  })

  it('does not removes snippets after ignored deletion', () => {
    const snippetId = "456"
    const snippets = {
      "123": { name: "some snippet", id: "123" },
      "456": { name: "snippet snip", id: snippetId }
    }
    const action = {
      type: REMOVE_SNIPPET_SUCCESS,
      response: { id: snippetId, deleted: false }
    }
    expect(
      snippetsReducer(snippets, action)
    ).to.eql(snippets)
  })
})
