Rails.application.routes.draw do
 namespace :api do
    resources :menus, except: [:new, :edit]
  end

  get '*other', to: 'static#index'
end