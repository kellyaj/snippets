class BoardsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    boards = build_boards(Board.where(:private => false))

    render :json => boards.to_json
  end

  def create
    board = Board.create(
      name: params[:name],
      private: params[:private],
    )

    render :json => build_single_board(board).to_json
  end

  def destroy
    board = Board.find(params[:id])
    board.destroy

    render :json => { id: params[:id], deleted: board.destroyed? }.to_json
  end

  def by_slug
    board = Board.find_by(slug: params[:slug])

    render :json => build_single_board(board).to_json if board
  end

  def clone
    parent_board = Board.find_by(slug: params[:slug])

    return board_error_response("cannot clone private board") if parent_board.private

    clone = Board.create(name: "clone of #{parent_board.name}", private: params[:isPrivate])
    parent_board.tags.map do |tag|
      Tag.create(tag.attributes.except("id").merge({"board_id" => clone.id}))
    end
    parent_board.snippets.map do |snippet|
      cloned_snippet = Snippet.create(snippet.attributes.except("id").merge({"board_id" => clone.id}))
      snippet.snippet_tags.map do |st|
        st_tag_name = Tag.find(st.tag_id).name
        clone_tag = Tag.find_by(board_id: clone.id, name: st_tag_name)
        SnippetTag.create(snippet_id: cloned_snippet.id, tag_id: clone_tag.id)
      end
    end

    render :json => build_single_board(clone).to_json if clone
  end

  def board_error_response(message)
    render :json => { "error" => message }.to_json
  end

  def build_single_board(board)
    build_boards([board])[board.id]
  end

  def build_boards(boards)
    acc = {}
    boards.map do |board|
      board_id = board.id
      acc[board_id] = {
        :name => board.name,
        :id => board_id,
        :slug => board.slug,
        :snippetCount => board.snippets.count.to_s
      }
    end
    acc
  end
end
