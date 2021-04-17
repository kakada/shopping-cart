  class Api::V1::ProductsController < ApplicationController
    def index
      products = params[:search].present? ? Product.where("lower(name) LIKE ?", "%#{params[:search].downcase}%") : Product.all

      render json: products
    end
  end