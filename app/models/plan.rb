class Plan < ApplicationRecord
    validates :nombre_plan, presence: true

    has_many :days, -> {where plan_id: ids}, dependent: :destroy

    validates_associated :kitchen
    belongs_to :kitchen



end
