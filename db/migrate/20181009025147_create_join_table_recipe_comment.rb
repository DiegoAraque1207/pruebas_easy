class CreateJoinTableRecipeComment < ActiveRecord::Migration[5.2]
  def change
    create_join_table :recipes, :comments do |t|
      t.index [:recipe_id, :comment_id]
      t.index [:comment_id, :recipe_id]
    end
  end
end
