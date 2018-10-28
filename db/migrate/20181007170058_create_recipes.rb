class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :nombre
      t.text :receta
      t.boolean :vegetariano
      t.float :duracion_preparacion
      t.float :numero_comensales

      t.timestamps
    end
  end
end
