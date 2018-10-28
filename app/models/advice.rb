class Advice < ApplicationRecord
  validates :titulo_consejo, presence:true
  validates_associated :recipe


  belongs_to :recipe, :dependent => :destroy

end
