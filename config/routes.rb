Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :products, only: [:index]

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :products, only: [:index]
    end
  end
end
