class AddPlanRefToDays < ActiveRecord::Migration[5.2]
  def change
    add_reference :days, :plan, foreign_key: true
  end
end
