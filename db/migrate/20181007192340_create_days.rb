class CreateDays < ActiveRecord::Migration[5.2]
  def change
    create_table :days do |t|
      t.string :dia
      t.text :descripcion
      t.integer :contador_calorias

      t.timestamps
    end
  end
end
