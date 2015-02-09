var App = App || {};

(function(App) {
  App.Answers = Backbone.Collection.extend({
    url: "/api/answers",
    model: App.Answer,
    quizAnswers: function(quizId) {
      var quizId = Number(quizId);
      var quizAnswers = this.filter(function(answer) {
        return answer.get('quiz_id') === quizId;
      });

      return new App.Answers(quizAnswers);
    }
  });

  App.answersCollection = new App.Answers();
})(App);

