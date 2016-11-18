class SnippetsController < ApplicationController

  skip_before_filter :verify_authenticity_token

  def index
    snippets = Snippet.all.map do |snippet|
      {
        :id => snippet.id,
        :name => snippet.name,
        :content => snippet.content
      }
    end
    render :json => snippets.to_json
  end

  def create
    snippet = Snippet.create(name: params[:name], content: params[:content])
    render :json => snippet.to_json
  end
end
