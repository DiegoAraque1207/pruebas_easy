class PagesController < ApplicationController


  # Por lo pronto, esta accion index se ejecuta SIEMPRE, es decir segun la configuracion que hay
  # en el archivo routes.rb cualquier peticion a la aplicacion ejecuta esta accion.
  #
  # Posteriormente se debe rutear mejor para todas las acciones necesarias

  def index

    puts ' @@@ COntrolador Pages'


  end

  def signin_action

    puts ' @@@ Accion de login'
  
    #Asi se recibe los datos del componente, fron debe decir el nombre de los parametros que se envia
    #se enruta el enlace del metodo rest para la comunicacion en el archivo routes
    
    user_email = params[:email]
    pass = params[:pass]
    puts 'usuario y contraseña'
    puts user_email
    puts pass

    # Si el login fue satisfactorio, el usuario se guarda en @usuario, de lo contrario se retorna nil
    @usuario, @cocina = login(user_email,pass)


      puts @usuario.nombre

      @cocina = Kitchen.find_by user_id: @usuario.id

      puts @cocina.descripcion


    #la variable que se envia son las mismas del state en el componente de react,
    #en este caso mensaje e id
    #
    # Queda pendiente ajustar envio respuesta a la vista

      # Mostrar mensaje de error en la vista

      if @usuario.nil?

        msg = 'Correo o contrasena incorrectos'
        puts msg

      else
        msg = 'EL usuario #{@usuario.nombre} ha iniciado sesion correctamente'
        puts msg

      end

      ans = {
        mensaje: msg, id: 2      }

      render json: ans


    end

  private
  def login(email,pass)

    if User.find_by correo: email
      email = User.find_by correo: email

    else

      # EL usuario no existe
      return nil, nil
    end

    if !email.nil? and email.contraseña.eql? pass

        # >> !Inicio de sesion satisfactorio!

        # Se busca la cocina del usuario logueado
        cocina = Kitchen.find_by user_id: email.id

        return email, cocina

    end

    # En este punto el usuario si existia pero la contrasena era incorrecta

    # Mostrar mensaje de error en la vista
    puts 'invalido'

    return nil, nil

  end



    
  end
