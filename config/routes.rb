Rails.application.routes.draw do

  post '/api/vi/login', to: 'api/vi/sessions#create'
  get "/api/v1/current_user", to: "api/v1/sessions#get_user"

  namespace :api do
    namespace :v1 do
      resources :users
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
