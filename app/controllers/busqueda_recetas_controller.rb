class BusquedaRecetasController < ApplicationController


  def consulta

    # Primera consult basica

    Recipe.all.each do |rec|

        puts rec.nombre

    end


  end


end
