# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  sentence    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  question_id :integer
#  quiz_id     :integer
#

class Answer < ActiveRecord::Base
  belongs_to :user_quiz
end
