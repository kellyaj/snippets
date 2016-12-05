class BoardsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    boards = build_boards(Board.all)

    render :json => boards.to_json
  end

  def create
  end

  def destroy
  end

  def build_boards(boards)
    acc = {}
    boards.map do |board|
      board_id = board.id
      acc[board_id] = {
        :name => board.name,
      }
    end
    acc
  end
end
