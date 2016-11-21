class SnippetsController < ApplicationController

  skip_before_filter :verify_authenticity_token

  def index
    snippets = build_snippets(Snippet.all)
    render :json => snippets.to_json
  end

  def create
    snippet = Snippet.create(name: params[:name], content: params[:content])
    render :json => snippet.to_json
  end

  def filter_by_id
    filtered_snippets = Tag.find(params[:tagId]).snippets
    render :json => build_snippets(filtered_snippets).to_json
  end

  def build_snippets(snippets)
    snippets.map do |snippet|
      tag_ids = SnippetTag.where(:snippet_id => snippet.id).map(&:tag_id)
      {
        :id => snippet.id,
        :name => snippet.name,
        :content => snippet.content,
        :tags => tag_ids
      }
    end
  end
end
