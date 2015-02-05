class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :word
      t.integer :times_correct

      t.timestamps null: false
    end
  end
end
