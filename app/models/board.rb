class Board < ActiveRecord::Base
  has_many :snippets
  has_many :tags
end
