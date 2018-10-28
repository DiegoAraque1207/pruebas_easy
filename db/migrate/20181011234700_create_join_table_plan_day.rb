class CreateJoinTablePlanDay < ActiveRecord::Migration[5.2]
  def change
    create_join_table :plans, :days do |t|
       t.index [:plan_id, :day_id]
       t.index [:day_id, :plan_id]
    end
  end
end
