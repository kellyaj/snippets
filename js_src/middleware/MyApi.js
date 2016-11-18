import { Schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'

class MyApi {
  retrieveSnippets() {
    return fetch('/snippets').then((response) => {
      return response.json();
    }).then((snippets) => {
      return snippets;
    });
  }

  submitNewSnippet() {
  }
}

module.exports = new MyApi();
