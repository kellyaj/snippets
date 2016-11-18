Rails.application.routes.draw do
  namespace :dashboard do
    get :index
  end

  resources :snippets

  root :to => "dashboard#index"
end
