class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :nombre
      t.string :nombre_usuario
      t.string :correo
      t.string :contraseña

      t.timestamps
    end
  end
end
