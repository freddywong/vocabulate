var App = App || {};

(function(App) {
  App.Answers = Backbone.Collection.extend({
    url: "/api/answers",
    model: App.Answer,
    userQuizAnswers: function(userQuizId) {
      var userQuizId = Number(userQuizId);
      var quizAnswers = this.filter(function(answer) {
        return answer.get('user_quiz_id') === userQuizId;
      });

      return new App.Answers(quizAnswers);
    }
  });

  App.answersCollection = new App.Answers();
})(App);

