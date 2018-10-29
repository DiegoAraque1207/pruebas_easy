class User < ApplicationRecord

  has_one :kitchen,  :dependent => :destroy
  has_many :comments, -> {where user_id: ids}, dependent: :destroy

  validates :nombre, :contraseña, :correo, :nombre_usuario, presence: true
  validates :correo, uniqueness: true

  after_save :createKitchen

  private
  def createKitchen
    a = "Bienvenido a la cocina de "+ nombre_usuario
    puts a, id
    cocina = Kitchen.new(descripcion: a, user_id: id )
    cocina.save

  end




end
