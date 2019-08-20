class Api::V1::SalesController < ApplicationController
  before_action :set_sale, only: [:show, :update, :destroy]

  # GET /sales
  def index
    @sales = Sale.all
    render json: SaleSerializer.new(@sales)
  end

  # GET /sales/1
  def show
    render json: SaleSerializer.new(@sale)
  end

  # POST /sales
  def create
    @sale = current_user.sales.build(sale_params)
    if  @sale.save
      render json: SaleSerializer.new(@sale), status: :created
    else
      render json: {
        error: "There was an error with your submission. Please try again or contact an administrator."
      }
    end
  end

  # PATCH/PUT /sales/1
  def update
    if @sale.update(sale_params)
      render json: SaleSerializer.new(@sale), status: :ok
    else
      render json: {
        error: "There was an error with your submission. Please try again or contact an administrator."
      }
    end
  end

  # DELETE /sales/1
  def destroy
    if @sale.destroy
      render json: SaleSerializer.new(@sales), status: 204
    else
      render json: {
        error: "You cannot delete this item. Please contact an administrator."
      }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sale
      @sale = Sale.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def sale_params
      params.require(:sale).permit(:address, :days, :notes, :user_id, :latitude, :longitude, :city, :country, :postalcode)
    end
end
