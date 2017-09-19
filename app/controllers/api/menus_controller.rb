class Api::MenusController < ApplicationController
  before_action :set_api_menu, only: [:show, :update, :destroy]

  # GET /api/menus
  def index
    @api_menus = Menu.all

    render json: @api_menus
  end

  # GET /api/menus/1
  def show
    render json: @api_menu
  end

  # POST /api/menus
  def create
    @api_menu = Menu.new(api_menu_params)

    if @api_menu.save
      render json: @api_menu, status: :created
    else
      render json: @api_menu.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/menus/1
  def update
    if @api_menu.update(api_menu_params)
      render json: @api_menu
    else
      render json: @api_menu.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/menus/1
  def destroy
    @api_menu.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_menu
      @api_menu = Menu.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def api_menu_params
      params.require(:menu).permit(:name, :description, :price)
    end
end
