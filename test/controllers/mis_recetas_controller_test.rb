require 'test_helper'

class MisRecetasControllerTest < ActionDispatch::IntegrationTest
  test "should get update_recipe_action" do
    get mis_recetas_update_recipe_action_url
    assert_response :success
  end

end
