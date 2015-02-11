'use strict';

var App = App || {};

(function(App) {
  App.UserQuizOverview = Backbone.View.extend({

    events: {
      'click .user-quizzes': 'userQuizzesView'
    },

    render: function(userQuizId) {
      var questions = App.questionsCollection.quizQuestions(userQuizId);
      var answers = App.answersCollection.userQuizAnswers(userQuizId);

      this.$el.html(
        HandlebarsTemplates['user_quiz_overview/index']({ questions: questions.toJSON(), answers: answers.toJSON() })
      );

      return this;
    }, 

    userQuizzesView: function() {
      App.router.navigate("/my_quizzes", { trigger: true });
    }
  });
})(App);