Rails.application.routes.draw do
  namespace :dashboard do
    get :index
  end

  get 'snippets/filter_by_id', to: 'snippets#filter_by_id'
  resources :snippets

  resources :tags

  root :to => "dashboard#index"
end
