Rails.application.routes.draw do

  resources :sales
  post '/api/v1/signup', to: 'api/v1/users#create'
  post '/api/v1/login', to: 'api/v1/sessions#create'
  get "/api/v1/current_user", to: "api/v1/sessions#get_user"
  delete '/api/v1/logout', to: 'api/v1/sessions#destroy'

  namespace :api do
    namespace :v1 do
      resources :users
      resources :sales
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
