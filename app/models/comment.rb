class Comment < ApplicationRecord

  # Crear llave foranea en CreateComments
  # add_index :comments, :recipe_id
  validates :comentario, length: {minimum: 1}
  validates_associated :recipe, :user

  belongs_to :recipe
  belongs_to :user

end
