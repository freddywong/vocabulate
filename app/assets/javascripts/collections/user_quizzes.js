var App = App || {};

(function(App) {
  App.UserQuizzes = Backbone.Collection.extend({
    url: "/api/user_quizzes",
    model: App.UserQuiz,
    updateAllProgress: function(){
      this.each(function(quiz) {
        var totalForQuiz = App.questionsCollection.quizQuestions(quiz.get('id')).reduce(function(sum, question) {
          return sum + question.get('times_correct');
        }, 0);
        App.userQuizzesCollection.get(quiz.get('id')).save({ progress: totalForQuiz });
      });
      
    }
  });

  App.userQuizzesCollection = new App.UserQuizzes();
})(App);
