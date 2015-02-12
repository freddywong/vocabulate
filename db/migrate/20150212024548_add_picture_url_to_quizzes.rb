class AddPictureUrlToQuizzes < ActiveRecord::Migration
  def change
    add_column :quizzes, :picture_url, :string
  end
end
