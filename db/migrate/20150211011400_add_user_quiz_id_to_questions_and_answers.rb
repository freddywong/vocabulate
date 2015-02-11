class AddUserQuizIdToQuestionsAndAnswers < ActiveRecord::Migration
  def change
    add_column :questions, :user_quiz_id, :integer
    add_column :answers, :user_quiz_id, :integer
  end
end
