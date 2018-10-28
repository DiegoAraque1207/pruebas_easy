class Kitchen < ApplicationRecord
  validates :descripcion, presence: true

  # Crear la join table: class CreateKitchensRecipesJoinTable
  has_and_belongs_to_many :recipes

  after_destroy do
    recipes.clear
  end

  belongs_to :user
  validates_associated :user

  has_many :plans, -> {where kitchen_id: ids}, dependent: :destroy

end
