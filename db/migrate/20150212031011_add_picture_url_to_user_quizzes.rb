class AddPictureUrlToUserQuizzes < ActiveRecord::Migration
  def change
    add_column :user_quizzes, :picture_url, :string
  end
end
