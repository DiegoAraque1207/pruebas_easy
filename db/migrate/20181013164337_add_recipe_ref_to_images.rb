class AddRecipeRefToImages < ActiveRecord::Migration[5.2]
  def change
    add_reference :images, :recipe, foreign_key: true
  end
end
