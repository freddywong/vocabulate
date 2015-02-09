Quiz.destroy_all
Question.destroy_all
Answer.destroy_all

# Quiz 1:
Quiz.create(title: 'Japanese Core 1000', progress: 30)

# Quiz 2:
Quiz.create(title: 'Japanese Core 2000', progress: 9)

# Question.create(word: '帰る', times_correct: 3)
# Question.create(word: '引き出し', times_correct: 2)
# Question.create(word: '昨日', times_correct: 5)
# Question.create(word: '職業', times_correct: 3)
# Question.create(word: '家内', times_correct: 2)
# Question.create(word: '冗談', times_correct: 5)
# Question.create(word: 'クーラー', times_correct: 3)
# Question.create(word: '不便', times_correct: 2)
# Question.create(word: '昼休み', times_correct: 5)
# Question.create(word: 'ラーメン', times_correct: 5)

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
Question.create(word: '帰る', times_correct: 3, quiz_id: 2)
Question.create(word: '引き出し', times_correct: 2, quiz_id: 2)
Question.create(word: '昨日', times_correct: 5, quiz_id: 2)
Question.create(word: '職業', times_correct: 5, quiz_id: 2)
Question.create(word: '家内', times_correct: 5, quiz_id: 2)
Question.create(word: '冗談', times_correct: 5, quiz_id: 2)
Question.create(word: 'クーラー', times_correct: 5, quiz_id: 2)
Question.create(word: '不便', times_correct: 5, quiz_id: 2)
Question.create(word: '昼休み', times_correct: 5, quiz_id: 2)
Question.create(word: 'ラーメン', times_correct: 5, quiz_id: 2)

Answer.create(sentence: 'to return', question_id: 1)
Answer.create(sentence: 'drawer', question_id: 2)
Answer.create(sentence: 'yesterday', question_id: 3)
Answer.create(sentence: 'occupation', question_id: 4)
Answer.create(sentence: "someone else's wife", question_id: 5)
Answer.create(sentence: 'joke', question_id: 6)
Answer.create(sentence: 'air-conditioner', question_id: 7)
Answer.create(sentence: 'inconvenient', question_id: 8)
Answer.create(sentence: 'lunch break', question_id: 9)
Answer.create(sentence: 'ramen', question_id: 10)
Answer.create(sentence: 'to return', question_id: 11)
Answer.create(sentence: 'drawer', question_id: 12)
Answer.create(sentence: 'yesterday', question_id: 13)
Answer.create(sentence: 'occupation', question_id: 14)
Answer.create(sentence: "someone else's wife", question_id: 15)
Answer.create(sentence: 'joke', question_id: 16)
Answer.create(sentence: 'air-conditioner', question_id: 17)
Answer.create(sentence: 'inconvenient', question_id: 18)
Answer.create(sentence: 'lunch break', question_id: 19)
Answer.create(sentence: 'ramen', question_id: 20)