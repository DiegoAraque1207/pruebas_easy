class CreatePlans < ActiveRecord::Migration[5.2]
  def change
    create_table :plans do |t|
      t.string :tipo_plan
      t.string :nombre_plan

      t.timestamps
    end
  end
end
