Quiz.destroy_all
Question.destroy_all
Answer.destroy_all

# User_quiz join table:


# Quiz 1:
Quiz.create(title: 'Japanese Core 1000', progress: 30)

# Quiz 2:
Quiz.create(title: 'Japanese Core 2000', progress: 9) 

# Quiz 1's questions:
Question.create(word: '帰る', times_correct: 3, quiz_id: 1)
Question.create(word: '引き出し', times_correct: 2, quiz_id: 1)
Question.create(word: '昨日', times_correct: 5, quiz_id: 1)
Question.create(word: '職業', times_correct: 5, quiz_id: 1)
Question.create(word: '家内', times_correct: 5, quiz_id: 1)
Question.create(word: '冗談', times_correct: 5, quiz_id: 1)
Question.create(word: 'クーラー', times_correct: 5, quiz_id: 1)
Question.create(word: '不便', times_correct: 5, quiz_id: 1)
Question.create(word: '昼休み', times_correct: 5, quiz_id: 1)
Question.create(word: 'ラーメン', times_correct: 5, quiz_id: 1)

# Quiz 2's questions:
Question.create(word: '再来年', times_correct: 3, quiz_id: 2)
Question.create(word: '着せる', times_correct: 2, quiz_id: 2)
Question.create(word: 'サラダ', times_correct: 4, quiz_id: 2)
Question.create(word: '代える', times_correct: 5, quiz_id: 2)
Question.create(word: '四角', times_correct: 5, quiz_id: 2)
Question.create(word: '急行', times_correct: 5, quiz_id: 2)
Question.create(word: '交差点', times_correct: 5, quiz_id: 2)
Question.create(word: '覚める', times_correct: 5, quiz_id: 2)
Question.create(word: 'ベルト', times_correct: 5, quiz_id: 2)
Question.create(word: '皆様', times_correct: 5, quiz_id: 2)

# Quiz 1's answers:
Answer.create(sentence: 'to return', question_id: 1, quiz_id: 1)
Answer.create(sentence: 'drawer', question_id: 2, quiz_id: 1)
Answer.create(sentence: 'yesterday', question_id: 3, quiz_id: 1)
Answer.create(sentence: 'occupation', question_id: 4, quiz_id: 1)
Answer.create(sentence: "someone else's wife", question_id: 5, quiz_id: 1)
Answer.create(sentence: 'joke', question_id: 6, quiz_id: 1)
Answer.create(sentence: 'air-conditioner', question_id: 7, quiz_id: 1)
Answer.create(sentence: 'inconvenient', question_id: 8, quiz_id: 1)
Answer.create(sentence: 'lunch break', question_id: 9, quiz_id: 1)
Answer.create(sentence: 'ramen', question_id: 10, quiz_id: 1)

# Quiz 2's answers:
Answer.create(sentence: 'the year after next', question_id: 11, quiz_id: 2)
Answer.create(sentence: 'dress (someone)', question_id: 12, quiz_id: 2)
Answer.create(sentence: 'salad', question_id: 13, quiz_id: 2)
Answer.create(sentence: 'substitute for', question_id: 14, quiz_id: 2)
Answer.create(sentence: "square", question_id: 15, quiz_id: 2)
Answer.create(sentence: 'express train', question_id: 16, quiz_id: 2)
Answer.create(sentence: 'crossing, intersection', question_id: 17, quiz_id: 2)
Answer.create(sentence: 'awake, wake up (naturally)', question_id: 18, quiz_id: 2)
Answer.create(sentence: 'belt', question_id: 19, quiz_id: 2)
Answer.create(sentence: 'everyone', question_id: 20, quiz_id: 2)