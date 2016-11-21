class Snippet < ActiveRecord::Base
  has_many :snippet_tags
  has_many :tags, :through => :snippet_tags
end
