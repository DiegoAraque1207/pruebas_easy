class PagesController < ApplicationController


  def index

  end

  def signin_action

    user_mail = params[:email]
    pass = params[:pass]

    user = User.find_by(correo: user_mail)

    puts user.nil?

    if user.nil?

      msg = 'Correo no registrado'
      ans = {
          mensaje: "#{msg}", id: 0
      }

    else

      if user.contraseña == pass

        msg = 'Bienvenido ' + user.nombre

        session[:current_user_id] = user.id

        ans = {
            mensaje: "#{msg}", id: 1
        }
      else
        msg = 'contraseña incorrecta'

        ans = {
            mensaje: "#{msg}", id: 0
        }
      end

    end


    render json: ans


  end


end
