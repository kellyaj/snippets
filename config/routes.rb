Rails.application.routes.draw do
  namespace :dashboard do
    get :index
  end
  namespace :snippets do
  end

  root :to => "dashboard#index"
end
