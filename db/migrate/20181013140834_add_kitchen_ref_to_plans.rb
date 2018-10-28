class AddKitchenRefToPlans < ActiveRecord::Migration[5.2]
  def change
    add_reference :plans, :kitchen, foreign_key: true
  end
end
