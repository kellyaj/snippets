class SnippetsController < ApplicationController

  def index
    snippets = Snippet.all.map do |snippet|
      {
        :name => snippet.name,
        :content => snippet.content
      }
    end
    render :json => snippets.to_json
  end

  def create
  end

  def update
  end
end
