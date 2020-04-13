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
      params.require(:item).permit(:name, :contact_phone, :contact_email, :zipcode)
    end 
  
end
