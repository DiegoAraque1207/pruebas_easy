class CreateJoinTableKitchenRecipe < ActiveRecord::Migration[5.2]
  def change
    create_join_table :kitchens, :recipes do |t|
       t.index [:kitchen_id, :recipe_id]
       t.index [:recipe_id, :kitchen_id]
    end
  end
end
