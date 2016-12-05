class CreateBoardTable < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :name
      t.boolean :private, :default => false
    end
  end
end
