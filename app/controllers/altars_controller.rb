class AltarsController < ApplicationController
  before_action :set_altar, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /altars
  def index
    @altars = Altar.all

    render json: @altars
  end

  # GET /altars/1
  def show
    render json: @altar
  end

  # POST /altars
  def create
    @altar = Altar.new(altar_params)
    @altar.user = @current_user

    if @altar.save
      render json: @altar, status: :created, location: @altar
    else
      render json: @altar.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /altars/1
  def update
    if @altar.update(altar_params)
      render json: @altar
    else
      render json: @altar.errors, status: :unprocessable_entity
    end
  end

  # DELETE /altars/1
  def destroy
    @altar.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_altar
      @altar = Altar.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def altar_params
      params.require(:altar).permit(:name, :user_id, :privacy)
    end
end
