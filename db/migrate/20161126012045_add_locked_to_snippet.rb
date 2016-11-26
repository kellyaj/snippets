class AddLockedToSnippet < ActiveRecord::Migration
  def change
    add_column :snippets, :locked, :boolean, :default => true
  end
end
