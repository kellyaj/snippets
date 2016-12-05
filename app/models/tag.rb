class Tag < ActiveRecord::Base
  has_many :snippet_tags
  has_many :snippets, :through => :snippet_tags
  belongs_to :board
end
