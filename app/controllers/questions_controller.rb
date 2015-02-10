class QuestionsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_question, only:[ :update]
  def index
    render json: Question.all
  end

  def update
    @question.update question_params
    render json: @question
  end

  private

  def find_question
    @question = Question.find params[:id]
  end

  def question_params
    params.require(:question).permit(:word, :times_correct)
  end

end

