UserQuiz.destroy_all
Question.destroy_all
Answer.destroy_all
User.destroy_all

user_one = User.create(
    email: 'example@example.com',
    password: 'password',
    password_confirmation: 'password'
  )
user_two = User.create(
    email: 'example2@example.com',
    password: 'password',
    password_confirmation: 'password'
  )

# Quiz 1:
quiz_one = Quiz.create(title: 'Japanese Core 1000')

# Quiz 2:
quiz_two = Quiz.create(title: 'Japanese Core 2000')


user_quiz_one = UserQuiz.create(title: quiz_one.title, progress: 30, quiz_id: quiz_one.id, user_id: user_one.id)
user_quiz_two = UserQuiz.create(title: quiz_two.title, progress: 9, quiz_id: quiz_two.id, user_id: user_one.id)
user_quiz_three = UserQuiz.create(title: quiz_two.title, progress: 30, quiz_id: quiz_two.id, user_id: user_two.id)

# User Quiz 1's questions:
question_one = user_quiz_one.questions.create(word: '帰る', times_correct: 2)
question_two = user_quiz_one.questions.create(word: '引き出し', times_correct: 2)
question_three = user_quiz_one.questions.create(word: '昨日', times_correct: 1)
question_four = user_quiz_one.questions.create(word: '職業', times_correct: 3)
question_five = user_quiz_one.questions.create(word: '家内', times_correct: 4)
question_six = user_quiz_one.questions.create(word: '冗談', times_correct: 3)
question_seven = user_quiz_one.questions.create(word: 'クーラー', times_correct: 1)
question_eight = user_quiz_one.questions.create(word: '不便', times_correct: 0)
question_nine = user_quiz_one.questions.create(word: '昼休み', times_correct: 0)
question_ten = user_quiz_one.questions.create(word: 'ラーメン', times_correct: 2)

# User Quiz 2's questions:
question_eleven = user_quiz_two.questions.create(word: '再来年', times_correct: 3)
question_twelve = user_quiz_two.questions.create(word: '着せる', times_correct: 2)
question_thirteen = user_quiz_two.questions.create(word: 'サラダ', times_correct: 4)
question_fourteen = user_quiz_two.questions.create(word: '代える', times_correct: 5)
question_fifteen = user_quiz_two.questions.create(word: '四角', times_correct: 5)
question_sixteen = user_quiz_two.questions.create(word: '急行', times_correct: 5)
question_seventeen = user_quiz_two.questions.create(word: '交差点', times_correct: 5)
question_eighteen = user_quiz_two.questions.create(word: '覚める', times_correct: 5)
question_nineteen = user_quiz_two.questions.create(word: 'ベルト', times_correct: 5)
question_twenty = user_quiz_two.questions.create(word: '皆様', times_correct: 5)

# User Quiz 3's questions:
question_twenty_one = user_quiz_three.questions.create(word: '再来年', times_correct: 3)
question_twenty_two = user_quiz_three.questions.create(word: '着せる', times_correct: 2)
question_twenty_three = user_quiz_three.questions.create(word: 'サラダ', times_correct: 4)
question_twenty_four = user_quiz_three.questions.create(word: '代える', times_correct: 5)
question_twenty_five = user_quiz_three.questions.create(word: '四角', times_correct: 5)
question_twenty_six = user_quiz_three.questions.create(word: '急行', times_correct: 5)
question_twenty_seven = user_quiz_three.questions.create(word: '交差点', times_correct: 5)
question_twenty_eight = user_quiz_three.questions.create(word: '覚める', times_correct: 5)
question_twenty_nine = user_quiz_three.questions.create(word: 'ベルト', times_correct: 5)
question_thirty = user_quiz_three.questions.create(word: '皆様', times_correct: 5)

# User Quiz 1's answers:
user_quiz_one.answers.create(sentence: 'to return', question_id: question_one.id)
user_quiz_one.answers.create(sentence: 'drawer', question_id: question_two.id)
user_quiz_one.answers.create(sentence: 'yesterday', question_id: question_three.id)
user_quiz_one.answers.create(sentence: 'occupation', question_id: question_four.id)
user_quiz_one.answers.create(sentence: "someone else's wife", question_id: question_five.id)
user_quiz_one.answers.create(sentence: 'joke', question_id: question_six.id)
user_quiz_one.answers.create(sentence: 'air-conditioner', question_id: question_seven.id)
user_quiz_one.answers.create(sentence: 'inconvenient', question_id: question_eight.id)
user_quiz_one.answers.create(sentence: 'lunch break', question_id: question_nine.id)
user_quiz_one.answers.create(sentence: 'ramen', question_id: question_ten.id)

# User Quiz 2's answers:
user_quiz_two.answers.create(sentence: 'the year after next', question_id: question_eleven.id)
user_quiz_two.answers.create(sentence: 'dress (someone)', question_id: question_twelve.id)
user_quiz_two.answers.create(sentence: 'salad', question_id: question_thirteen.id)
user_quiz_two.answers.create(sentence: 'substitute for', question_id: question_fourteen.id)
user_quiz_two.answers.create(sentence: "square", question_id: question_fifteen.id)
user_quiz_two.answers.create(sentence: 'express train', question_id: question_sixteen.id)
user_quiz_two.answers.create(sentence: 'crossing, intersection', question_id: question_seventeen.id)
user_quiz_two.answers.create(sentence: 'awake, wake up (naturally)', question_id: question_eighteen.id)
user_quiz_two.answers.create(sentence: 'belt', question_id: question_nineteen.id)
user_quiz_two.answers.create(sentence: 'everyone', question_id: question_twenty.id)

# User Quiz 3's answers:
user_quiz_three.answers.create(sentence: 'the year after next', question_id: question_twenty_one.id)
user_quiz_three.answers.create(sentence: 'dress (someone)', question_id: question_twenty_two.id)
user_quiz_three.answers.create(sentence: 'salad', question_id: question_twenty_three.id)
user_quiz_three.answers.create(sentence: 'substitute for', question_id: question_twenty_four.id)
user_quiz_three.answers.create(sentence: "square", question_id: question_twenty_five.id)
user_quiz_three.answers.create(sentence: 'express train', question_id: question_twenty_six.id)
user_quiz_three.answers.create(sentence: 'crossing, intersection', question_id: question_twenty_seven.id)
user_quiz_three.answers.create(sentence: 'awake, wake up (naturally)', question_id: question_twenty_eight.id)
user_quiz_three.answers.create(sentence: 'belt', question_id: question_twenty_nine.id)
user_quiz_three.answers.create(sentence: 'everyone', question_id: question_thirty.id)