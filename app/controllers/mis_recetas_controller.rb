class MisRecetasController < ApplicationController

  def update_recipe_action

      puts ' @@@ Accion de actualizar recetas'

      # Queda Pendiente recibir la receta que se va editar de la vista por parametros
      @receta = Recipe.find_by id: 115


      # Queda pendiente recibir los nuevos parametros capturados en la vista que se colocaran en la receta
      @nombre = 'Tinto bien caliente'
      @descripcion = 'Esto es una evolucion del agua hervida... ahora se le va agregar 3 cucharadas de cafe a una olleta de agua hervida, adicionar azucar si se quiere, pero se pueden volver gorditos :V'
      @vegetariano = true
      @duracion = 10
      @comensales = 4
      @publico = false
      @guarniciones = 'Se le puede aplicar canela, mas azucar o lo que se le de la gana :D'

      resultado = update_recipe(@receta, @nombre, @descripcion, @vegetariano, @duracion, @comensales, @publico, @guarniciones)

      puts resultado

  end


  private
  def update_recipe(receta, nom, des, veg, dur, com, pub, guar )

    # El nombre y la descripcion no pueden ser nulos
    if nom.to_s.length > 0 and nom.to_s.length > 0

      receta.nombre = nom
      receta.receta = des
      receta.vegetariano = veg
      receta.duracion_preparacion = dur
      receta.numero_comensales = com
      receta.publico = pub
      receta.guarniciones = guar

      receta.save

      return 'La receta se actualizo satisfactoriamente'

    end

    return 'Porfavor, complete los campos requeridos'

  end

end
