class CreateAdvices < ActiveRecord::Migration[5.2]
  def change
    create_table :advices do |t|
      t.string :titulo_consejo
      t.text :consejo

      t.timestamps
    end
  end
end
