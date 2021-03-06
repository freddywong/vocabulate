# == Schema Information
#
# Table name: quizzes
#
#  id         :integer          not null, primary key
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Quiz < ActiveRecord::Base
  has_many :user_quizzes
  has_many :users, through: :user_quizzes
end
