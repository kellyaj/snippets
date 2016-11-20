import { expect } from 'chai'
import tagsReducer from '../../js_src/reducers/tagsReducer'
import {
  GET_TAG_SUCCESS,
  ADD_TAG_SUCCESS,
  FILTER_BY_TAG_ID,
} from '../../js_src/actions/ActionTypes'

describe('tagsReducer', () => {
  it('returns the tags by default', () => {
    const tags = { "123": { name: "tag", id: "123" } }
    const action = { type: "SOME_UNRELATED_ACTION" }
    expect(
      tagsReducer(tags, action)
    ).to.eql(tags)
  })

  it('adds tags after their initial retrieval', () => {
    const retrievedTags = { "123": { name: "some tag" } }
    const action = {
      type: GET_TAG_SUCCESS,
      response: retrievedTags
    }
    expect(
      tagsReducer({}, action)
    ).to.eql(retrievedTags)
  })

  it('adds new tags', () => {
    const id = "123"
    const retrievedTag = { name: "some tag", id: id  }
    const action = {
      type: ADD_TAG_SUCCESS,
      response: retrievedTag
    }
    expect(
      tagsReducer({}, action)
    ).to.eql({
      "123": retrievedTag
    })
  })
})
