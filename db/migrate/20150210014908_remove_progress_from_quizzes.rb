class RemoveProgressFromQuizzes < ActiveRecord::Migration
  def change
    remove_column :quizzes, :progress, :integer
  end
end
