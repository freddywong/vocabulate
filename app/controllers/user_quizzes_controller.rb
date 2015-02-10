class UserQuizzesController < ApplicationController
  before_action :authenticate_user!
  before_action :find_user_quiz, only: [:update]

  def index
    @user_quizzes = UserQuiz.all
    @current_user_quizzes = UserQuiz.where(user_id: current_user.id)
    render json: @current_user_quizzes
  end

  def update
    @user_quiz.update user_quiz_params
    render json: @user_quiz
  end

  private

  def find_user_quiz
    @user_quiz = UserQuiz.find params[:id]
  end

  def user_quiz_params
    params.require(:user_quiz).permit(:title, :progress)
  end
end
