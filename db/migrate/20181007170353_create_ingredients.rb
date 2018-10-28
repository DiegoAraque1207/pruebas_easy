class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :nombre
      t.float :calorias
      t.boolean :vegetariano
      t.string :precio
      t.string :tipo_ingrediente
      t.text :consejo_ingrediente

      t.timestamps
    end
  end
end
