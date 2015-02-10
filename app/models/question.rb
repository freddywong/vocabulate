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

class Question < ActiveRecord::Base
end
