class AddFavoritosToKitchens < ActiveRecord::Migration[5.2]
  def change
    add_column :kitchens, :favoritos, :string
  end
end
