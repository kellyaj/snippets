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

    render :json => board.to_json
  end

  def destroy
    board = Board.find(params[:id])
    board.destroy

    render :json => { id: params[:id], deleted: board.destroyed? }.to_json
  end

  def by_slug
    board = Board.find_by(slug: params[:slug])

    render :json => build_boards([board])[board.id].to_json if board
  end

  def build_boards(boards)
    acc = {}
    boards.map do |board|
      board_id = board.id
      acc[board_id] = {
        :name => board.name,
        :id => board_id,
        :slug => board.slug
      }
    end
    acc
  end
end
