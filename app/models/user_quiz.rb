# == Schema Information
#
# Table name: user_quizzes
#
#  id         :integer          not null, primary key
#  quiz_id    :integer
#  user_id    :integer
#  progress   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserQuiz < ActiveRecord::Base
end
