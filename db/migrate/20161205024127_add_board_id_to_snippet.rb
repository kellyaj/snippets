class AddBoardIdToSnippet < ActiveRecord::Migration
  def change
    add_column :snippets, :board_id, :integer
  end
end
