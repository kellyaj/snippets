class CreateSnippetTags < ActiveRecord::Migration
  def change
    create_table :snippet_tags do |t|
      t.integer :snippet_id
      t.integer :tag_id
    end
  end
end
