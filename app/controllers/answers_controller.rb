class AnswersController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: Answer.all.order(:id)
  end
end
