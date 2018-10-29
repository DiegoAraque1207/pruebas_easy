class RecipesController < ApplicationController
 # before_action :set_recipe, only: [:show, :edit, :update, :destroy]

  # GET /recipes
  # GET /recipes.json
  def index
    @recipes = Recipe.all
  end

  # GET /recipes/1
  # GET /recipes/1.json
  def show
  end

  # GET /recipes/new
  def new

    @recipe = Recipe.new(nombre: params[:nombre])
    puts @recipe.nombre
    #@recipe = Recipe.new
  end

  # GET /recipes/1/edit
  def edit
  end

  # POST /recipes
  # POST /recipes.json
  def create
    #{nombre: nombre_receta, receta: receta, guaricion: guarnicion, num_comensales: num_comensales, tiempo: tiempo})

    @recipe = Recipe.create(nombre: params[:nombre], receta: params[:receta], guarniciones: params[:guarnicion],
                       numero_comensales: params[:num_comensales], duracion_preparacion: params[:tiempo])
    puts "Receta creada"
    puts session[:current_user_id]

  end

  # PATCH/PUT /recipes/1
  # PATCH/PUT /recipes/1.json
  def update
    respond_to do |format|
      if @recipe.update(recipe_params)
        format.html { redirect_to @recipe, notice: 'Recipe was successfully updated.' }
        format.json { render :show, status: :ok, location: @recipe }
      else
        format.html { render :edit }
        format.json { render json: @recipe.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /recipes/1
  # DELETE /recipes/1.json
  def destroy
    @recipe.destroy
    respond_to do |format|
      format.html { redirect_to recipes_url, notice: 'Recipe was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def recipe_params
      params.fetch(:recipe, {})
    end
end
