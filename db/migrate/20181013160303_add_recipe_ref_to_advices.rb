class AddRecipeRefToAdvices < ActiveRecord::Migration[5.2]
  def change
    add_reference :advices, :recipe, foreign_key: true
  end
end
