class CreateUserQuizzes < ActiveRecord::Migration
  def change
    create_table :user_quizzes do |t|
      t.integer :quiz_id
      t.integer :user_id
      t.integer :progress
      t.timestamps null: false
    end
  end
end
