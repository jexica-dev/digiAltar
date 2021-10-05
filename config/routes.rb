Rails.application.routes.draw do
  # post '/users', to: 'user#create'
  resources :users, only: :create
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :images
  resources :altars
  put 'altars/:image_id/images/:id', to: 'altars#add_image_to_altar'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
