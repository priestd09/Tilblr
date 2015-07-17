class Api::BlogsController < ApplicationController
  def index
    @blogs = current_user.blogs
  end

  def show
    @blog = Blog.includes(:owner, :posts => :blog).find(params[:id])
  end
end
