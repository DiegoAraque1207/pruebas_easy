class Ingredient < ApplicationRecord
  validates :nombre, :calorias, presence:true

  has_and_belongs_to_many :recipes
  after_destroy do
    recipes.clear
  end
end