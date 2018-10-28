class AddCantidadesToRecipe < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :cantidades, :float
  end
end
