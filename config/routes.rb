Rails.application.routes.draw do
  get '/home', to: 'welcome#index'
  get '/jsgames', to: 'welcome#javaScriptGames'
  get '/javaScriptApps1', to: 'welcome#javaScriptApps1'
  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
