# == Schema Information
#
# Table name: questions
#
#  id            :integer          not null, primary key
#  word          :string
#  times_correct :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  quiz_id       :integer
#

require 'test_helper'

class QuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
