class AddBoardIdToTag < ActiveRecord::Migration
  def change
    add_column :tags, :board_id, :integer
  end
end
