class Day < ApplicationRecord

  # Crear llave foranea en CreateDays
  # add_index :days, :plan_id

  validates :dia, presence: true
  validates_associated :plan

  belongs_to :plan
  has_and_belongs_to_many :recipes

  after_destroy do
    recipes.clear
  end

end
