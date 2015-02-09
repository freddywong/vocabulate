class QuizzesController < ApplicationController
  # before_action :authenticate_user!
  before_action :find_quiz, only: [:update]

  def index
    render json: Quiz.all
  end

  def update
    @quiz.update quiz_params
    render json: @quiz
  end

  private

  def find_quiz
    @quiz = Quiz.find params[:id]
  end

  def quiz_params
    params.require(:quiz).permit(:title, :progress)
  end
end
