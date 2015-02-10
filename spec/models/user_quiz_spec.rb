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

require 'rails_helper'

RSpec.describe UserQuiz, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
