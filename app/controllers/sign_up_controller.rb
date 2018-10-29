class SignUpController < ApplicationController


  def registration

    user = User.new(nombre: params[:user], nombre_usuario: params[:user], correo:params[:email], contraseña: params[:pass])

    if user.valid?
      puts "nuevo usuario"
      user.save
      msg = 'Usuario creado'
      puts msg

      ans = {
          mensaje: "#{msg}", id: true
      }
      session[:current_user_id] = user.id
    else

      msg = 'Usuario ya existe'
      ans = {
          mensaje: "#{msg}", id: false
      }


    end


    render json: ans


  end
end
