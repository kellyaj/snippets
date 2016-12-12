Rails.application.routes.draw do
  namespace :dashboard do
    get :index
  end

  get 'boards/by_slug', to: 'boards#by_slug'
  post 'boards/clone', to: 'boards#clone'
  resources :boards

  post 'snippets/toggle_snippet_lock', to: 'snippets#toggle_snippet_lock'
  get 'snippets/filter_by_id', to: 'snippets#filter_by_id'
  resources :snippets

  resources :tags

  root :to => "dashboard#index"
  get '(*slug)' => 'dashboard#index'
end
