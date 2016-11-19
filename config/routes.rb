Rails.application.routes.draw do
  namespace :dashboard do
    get :index
  end

  resources :snippets

  resources :tags

  root :to => "dashboard#index"
end
