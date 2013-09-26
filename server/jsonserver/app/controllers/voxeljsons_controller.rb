class VoxeljsonsController < ApplicationController
  before_action :set_voxeljson, only: [:show, :edit, :update, :destroy]

  # GET /voxeljsons
  # GET /voxeljsons.json
  def index
    @voxeljsons = Voxeljson.all
  end

  # GET /voxeljsons/1
  # GET /voxeljsons/1.json
  def show
    @voxeljson = Voxeljson.find(params[:id])
    render :json => @voxeljson.json
  end

  # GET /voxeljsons/new
  def new
    @voxeljson = Voxeljson.new
  end

  # GET /voxeljsons/1/edit
  def edit
  end

  # POST /voxeljsons
  # POST /voxeljsons.json
  def create
    @voxeljson = Voxeljson.new(voxeljson_params)
    p voxeljson_params

    respond_to do |format|
      if @voxeljson.save
        format.html { redirect_to @voxeljson, notice: 'Voxeljson was successfully created.' }
        format.json { render action: 'show', status: :created, location: @voxeljson }
      else
        format.html { render action: 'new' }
        format.json { render json: @voxeljson.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /voxeljsons/1
  # PATCH/PUT /voxeljsons/1.json
  def update
    respond_to do |format|
      if @voxeljson.update(voxeljson_params)
        format.html { redirect_to @voxeljson, notice: 'Voxeljson was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @voxeljson.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /voxeljsons/1
  # DELETE /voxeljsons/1.json
  def destroy
    @voxeljson.destroy
    respond_to do |format|
      format.html { redirect_to voxeljsons_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_voxeljson
      @voxeljson = Voxeljson.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def voxeljson_params
      params.require(:voxeljson).permit(:json)
    end
end
