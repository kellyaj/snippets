class Snippet < ActiveRecord::Base
  has_many :snippet_tags
  has_many :tags, :through => :snippet_tags

  def size
    return "small" if self.content.length < 20
    return "medium" if self.content.length < 50
    return "large"
  end
end
