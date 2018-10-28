class SignUpController < ApplicationController


  def registration

    user = User.new(nombre: params[:user], nombre_usuario: params[:user], correo:params[:email], contraseña: params[:pass])

    if user.valid?
      puts "nuevo usuario"
      user.save
      msg = "Usuario creado"
      puts msg

      ans = {
          mensaje: "#{msg}", id: 0
      }

    else

      msg = 'Usuario ya existe'
      ans = {
          mensaje: "#{msg}", id: 1
      }


    end


    render json: ans


  end
end
