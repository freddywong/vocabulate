class RemoveQuizIdFromQuestionsAndAnswers < ActiveRecord::Migration
  def change
    remove_column :questions, :quiz_id, :integer
    remove_column :answers, :quiz_id, :integer
  end
end
