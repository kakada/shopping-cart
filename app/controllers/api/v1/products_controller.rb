  class Api::V1::ProductsController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create]

    def index
      products = params[:search].present? ? Product.where("lower(name) LIKE ?", "%#{params[:search].downcase}%") : Product.all
      products = products.order(id: :desc)

      render json: products
    end

    def create
      product = Product.new protected_params

      begin
        product.save!

        render json: product
      rescue StandardError => e
        puts e.message  
        puts e.backtrace.inspect 
      end
    end

    private

    def protected_params
      params.require(:product).permit(:name)
    end
  end