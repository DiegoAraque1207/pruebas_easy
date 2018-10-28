class AddCaracteristicasToIngredients < ActiveRecord::Migration[5.2]
  def change
    add_column :ingredients, :caracteristica, :text
  end
end
