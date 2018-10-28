class CreateJoinTableDayRecipe < ActiveRecord::Migration[5.2]
  def change
    create_join_table :days, :recipes do |t|
       t.index [:day_id, :recipe_id]
       t.index [:recipe_id, :day_id]
    end
  end
end
