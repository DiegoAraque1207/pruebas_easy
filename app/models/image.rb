class Image < ApplicationRecord
  mount_uploader :picture, ImageUploader

  # Crear llave foranea en CreateImages
  # add_index :images, :recipe_id
  belongs_to :recipe
end
