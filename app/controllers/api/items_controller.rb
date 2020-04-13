class Api::ItemsController < ApplicationController
  
    def index
      render json: Item.all
    end
  
    def show
      item = Item.find(params[:id])
      render json: item
    end
  
    def create
      render json: Item.create(item_params)
    end
    
    private 

  
    def item_params
      params.require(:item).permit(:name, :image, :description, :likes)
    end 
  
end
