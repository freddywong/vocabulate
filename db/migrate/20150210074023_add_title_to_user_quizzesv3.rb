class AddTitleToUserQuizzesv3 < ActiveRecord::Migration
  def change
    add_column :user_quizzes, :title, :string
  end
end
