class Recipe < ApplicationRecord

  validates :nombre, :receta, presence: true

  has_and_belongs_to_many :ingredients
  has_and_belongs_to_many :kitchens
  has_and_belongs_to_many :days

  has_many :advices, -> {where recipe_id: ids}, dependent: :destroy #ok
  has_many :comments, -> {where recipe_id: ids}, dependent: :destroy  #ok
  has_many :images, -> {where recipe_id: ids}, dependent: :destroy  # pendiente prueba

  after_destroy do

    ingredients.clear
    kitchens.clear
    days.clear

  end

end
