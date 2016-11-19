class TagsController < ApplicationController

  skip_before_filter :verify_authenticity_token

  def index
    tags = Tag.all.map do |tag|
      {
        :id => tag.id,
        :name => tag.name
      }
    end

    render :json => tags.to_json
  end

  def create
    tag = Tag.create(name: params[:name])
    render :json => tag.to_json
  end
end
