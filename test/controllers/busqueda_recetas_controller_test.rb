require 'test_helper'

class BusquedaRecetasControllerTest < ActionDispatch::IntegrationTest
  test "should get consulta" do
    get busqueda_recetas_consulta_url
    assert_response :success
  end

end
