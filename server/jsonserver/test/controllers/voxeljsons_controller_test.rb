require 'test_helper'

class VoxeljsonsControllerTest < ActionController::TestCase
  setup do
    @voxeljson = voxeljsons(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:voxeljsons)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create voxeljson" do
    assert_difference('Voxeljson.count') do
      post :create, voxeljson: { json: @voxeljson.json }
    end

    assert_redirected_to voxeljson_path(assigns(:voxeljson))
  end

  test "should show voxeljson" do
    get :show, id: @voxeljson
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @voxeljson
    assert_response :success
  end

  test "should update voxeljson" do
    patch :update, id: @voxeljson, voxeljson: { json: @voxeljson.json }
    assert_redirected_to voxeljson_path(assigns(:voxeljson))
  end

  test "should destroy voxeljson" do
    assert_difference('Voxeljson.count', -1) do
      delete :destroy, id: @voxeljson
    end

    assert_redirected_to voxeljsons_path
  end
end
