class SnippetsController < ApplicationController

  skip_before_filter :verify_authenticity_token

  def index
    snippets = build_snippets(Snippet.where(:board_id => params[:board_id]))

    render :json => snippets.to_json
  end

  def create
    snippet = Snippet.create(
      name: params[:name],
      content: params[:content],
      board_id: params[:board_id]
    )
    create_snippet_tags(snippet.id, params[:tags])

    render :json => snippet.to_json
  end

  def destroy
    snippet = Snippet.find(params[:id])
    snippet.destroy unless snippet.locked

    render :json => { id: params[:id], deleted: snippet.destroyed? }.to_json
  end

  def filter_by_id
    filtered_snippets = Tag.find(params[:tagId]).snippets

    render :json => build_snippets(filtered_snippets).to_json
  end

  def toggle_snippet_lock
    snippet = Snippet.find(params[:snippet_id])
    snippet.update(locked: params[:should_lock])

    render :json => build_snippets([snippet])[snippet.id].to_json
  end

  def build_snippets(snippets)
    acc = {}
    snippets.map do |snippet|
      tag_ids = SnippetTag.where(:snippet_id => snippet.id).map(&:tag_id)
      snippet_id = snippet.id
      acc[snippet_id] = {
        :id => snippet_id,
        :name => snippet.name,
        :content => snippet.content,
        :locked => snippet.locked,
        :size => snippet.size,
        :tags => tag_ids
      }
    end
    acc
  end

  def create_snippet_tags(snippet_id, tag_ids)
    tag_ids.each do |id|
      SnippetTag.create(snippet_id: snippet_id, tag_id: id)
    end
  end
end
