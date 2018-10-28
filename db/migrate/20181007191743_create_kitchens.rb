class CreateKitchens < ActiveRecord::Migration[5.2]
  def change
    create_table :kitchens do |t|
      t.text :descripcion
      t.text :consejos

      t.timestamps
    end
  end
end
