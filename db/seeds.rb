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


UserQuiz.create(title: quiz_one.title, progress: 30, quiz_id: quiz_one.id, user_id: user_one.id)
UserQuiz.create(title: quiz_two.title, progress: 9, quiz_id: quiz_two.id, user_id: user_one.id)
UserQuiz.create(title: quiz_two.title, progress: 30, quiz_id: quiz_two.id, user_id: user_two.id)

# Quiz 1's questions:
question_one = quiz_one.questions.create(word: '帰る', times_correct: 3)
question_two = quiz_one.questions.create(word: '引き出し', times_correct: 2)
question_three = quiz_one.questions.create(word: '昨日', times_correct: 5)
question_four = quiz_one.questions.create(word: '職業', times_correct: 5)
question_five = quiz_one.questions.create(word: '家内', times_correct: 5)
question_six = quiz_one.questions.create(word: '冗談', times_correct: 5)
question_seven = quiz_one.questions.create(word: 'クーラー', times_correct: 5)
question_eight = quiz_one.questions.create(word: '不便', times_correct: 5)
question_nine = quiz_one.questions.create(word: '昼休み', times_correct: 5)
question_ten = quiz_one.questions.create(word: 'ラーメン', times_correct: 5)

# Quiz 2's questions:
question_eleven = quiz_two.questions.create(word: '再来年', times_correct: 3)
question_twelve = quiz_two.questions.create(word: '着せる', times_correct: 2)
question_thirteen = quiz_two.questions.create(word: 'サラダ', times_correct: 4)
question_fourteen = quiz_two.questions.create(word: '代える', times_correct: 5)
question_fifteen = quiz_two.questions.create(word: '四角', times_correct: 5)
question_sixteen = quiz_two.questions.create(word: '急行', times_correct: 5)
question_seventeen = quiz_two.questions.create(word: '交差点', times_correct: 5)
question_eighteen = quiz_two.questions.create(word: '覚める', times_correct: 5)
question_nineteen = quiz_two.questions.create(word: 'ベルト', times_correct: 5)
question_twenty = quiz_two.questions.create(word: '皆様', times_correct: 5)

# Quiz 1's answers:
quiz_one.answers.create(sentence: 'to return', question_id: question_one.id)
quiz_one.answers.create(sentence: 'drawer', question_id: question_two.id)
quiz_one.answers.create(sentence: 'yesterday', question_id: question_three.id)
quiz_one.answers.create(sentence: 'occupation', question_id: question_four.id)
quiz_one.answers.create(sentence: "someone else's wife", question_id: question_five.id)
quiz_one.answers.create(sentence: 'joke', question_id: question_six.id)
quiz_one.answers.create(sentence: 'air-conditioner', question_id: question_seven.id)
quiz_one.answers.create(sentence: 'inconvenient', question_id: question_eight.id)
quiz_one.answers.create(sentence: 'lunch break', question_id: question_nine.id)
quiz_one.answers.create(sentence: 'ramen', question_id: question_ten.id)

# Quiz 2's answers:
quiz_two.answers.create(sentence: 'the year after next', question_id: question_eleven.id)
quiz_two.answers.create(sentence: 'dress (someone)', question_id: question_twelve.id)
quiz_two.answers.create(sentence: 'salad', question_id: question_thirteen.id)
quiz_two.answers.create(sentence: 'substitute for', question_id: question_fourteen.id)
quiz_two.answers.create(sentence: "square", question_id: question_fifteen.id)
quiz_two.answers.create(sentence: 'express train', question_id: question_sixteen.id)
quiz_two.answers.create(sentence: 'crossing, intersection', question_id: question_seventeen.id)
quiz_two.answers.create(sentence: 'awake, wake up (naturally)', question_id: question_eighteen.id)
quiz_two.answers.create(sentence: 'belt', question_id: question_nineteen.id)
quiz_two.answers.create(sentence: 'everyone', question_id: question_twenty.id)