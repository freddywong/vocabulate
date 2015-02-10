class RemoveTitleFromUserQuizzesV2 < ActiveRecord::Migration
  def change
    remove_column :user_quizzes, :title, :string
  end
end
