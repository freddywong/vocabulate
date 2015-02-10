# == Route Map
#
#                   Prefix Verb   URI Pattern                          Controller#Action
#         new_user_session GET    /users/sign_in(.:format)             devise/sessions#new
#             user_session POST   /users/sign_in(.:format)             devise/sessions#create
#     destroy_user_session DELETE /users/sign_out(.:format)            devise/sessions#destroy
#            user_password POST   /users/password(.:format)            devise/passwords#create
#        new_user_password GET    /users/password/new(.:format)        devise/passwords#new
#       edit_user_password GET    /users/password/edit(.:format)       devise/passwords#edit
#                          PATCH  /users/password(.:format)            devise/passwords#update
#                          PUT    /users/password(.:format)            devise/passwords#update
# cancel_user_registration GET    /users/cancel(.:format)              devise/registrations#cancel
#        user_registration POST   /users(.:format)                     devise/registrations#create
#    new_user_registration GET    /users/sign_up(.:format)             devise/registrations#new
#   edit_user_registration GET    /users/edit(.:format)                devise/registrations#edit
#                          PATCH  /users(.:format)                     devise/registrations#update
#                          PUT    /users(.:format)                     devise/registrations#update
#                          DELETE /users(.:format)                     devise/registrations#destroy
#             user_quizzes GET    /api/user_quizzes(.:format)          user_quizzes#index
#                          POST   /api/user_quizzes(.:format)          user_quizzes#create
#            new_user_quiz GET    /api/user_quizzes/new(.:format)      user_quizzes#new
#           edit_user_quiz GET    /api/user_quizzes/:id/edit(.:format) user_quizzes#edit
#                user_quiz GET    /api/user_quizzes/:id(.:format)      user_quizzes#show
#                          PATCH  /api/user_quizzes/:id(.:format)      user_quizzes#update
#                          PUT    /api/user_quizzes/:id(.:format)      user_quizzes#update
#                          DELETE /api/user_quizzes/:id(.:format)      user_quizzes#destroy
#                questions GET    /api/questions(.:format)             questions#index
#                          POST   /api/questions(.:format)             questions#create
#             new_question GET    /api/questions/new(.:format)         questions#new
#            edit_question GET    /api/questions/:id/edit(.:format)    questions#edit
#                 question GET    /api/questions/:id(.:format)         questions#show
#                          PATCH  /api/questions/:id(.:format)         questions#update
#                          PUT    /api/questions/:id(.:format)         questions#update
#                          DELETE /api/questions/:id(.:format)         questions#destroy
#                  answers GET    /api/answers(.:format)               answers#index
#                          POST   /api/answers(.:format)               answers#create
#               new_answer GET    /api/answers/new(.:format)           answers#new
#              edit_answer GET    /api/answers/:id/edit(.:format)      answers#edit
#                   answer GET    /api/answers/:id(.:format)           answers#show
#                          PATCH  /api/answers/:id(.:format)           answers#update
#                          PUT    /api/answers/:id(.:format)           answers#update
#                          DELETE /api/answers/:id(.:format)           answers#destroy
#                     root GET    /                                    pages#index
#                          GET    /*anything(.:format)                 pages#index
#

Rails.application.routes.draw do

  devise_for :users
  
  scope '/api' do
    resources :quizzes
    resources :user_quizzes
    resources :questions
    resources :answers
    get 'current_user_quizzes', to: "user_quizzes#get_current_users_quizzes"
  end


  root "pages#index"

  get '*anything', to: "pages#index"

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
