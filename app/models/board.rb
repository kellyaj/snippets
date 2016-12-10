class Board < ActiveRecord::Base
  has_many :snippets
  has_many :tags

  before_create :assign_slug

  validates_uniqueness_of :slug

  private

  def assign_slug
    self.slug = rand(36**8).to_s(36)
  end
end
