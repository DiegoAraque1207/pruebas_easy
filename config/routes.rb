Rails.application.routes.draw do


  post 'interface/sign_up', to: 'sign_up#registration'

  root 'pages#index'

  # Controlador MisRecetas, la idea es que va manejar todas las acciones relacionadas a la vista
  # donde el usuario ve sus recetas, las edita, las elimina y las crea
  get 'mis_recetas/update_recipe_action'

  # Controlador BUsquedaRecetas, la idea es que va manejar todas las acciones relacionadas a la vista
  # donde el usuario busca recetas, aplica filtros, y guarda recetas en su cocina
  get 'busqueda_recetas/consulta'


  post 'sign_in', to: 'pages#signin_action'


  # Esta instruccion hace que la accion index del controlador pages se ejecute siempre
  match '*path', to: 'pages#index', via: :all


end
