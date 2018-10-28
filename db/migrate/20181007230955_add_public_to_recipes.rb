class AddPublicToRecipes < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :publico, :boolean
  end
end
