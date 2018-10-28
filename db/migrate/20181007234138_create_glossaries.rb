class CreateGlossaries < ActiveRecord::Migration[5.2]
  def change
    create_table :glossaries do |t|
      t.string :palabra_clave
      t.string :receta

      t.timestamps
    end
  end
end
