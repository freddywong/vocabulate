'use strict';

var App = App || {};

(function(App) {
  App.UserQuizzesView = Backbone.View.extend({

    events: {
      'click .start-quiz': 'startQuiz',
      'click .quiz-overview': 'quizOverview'
    },

    render: function() {

      var totalsForQuizzes = App.userQuizzesCollection.updateAllProgress();

      this.$el.html(
        HandlebarsTemplates['user_quizzes/index']({ quizzes: App.userQuizzesCollection.toJSON() })
      );

      return this;
    },

    quizOverview: function(event) {
      var userQuizId = $(event.currentTarget).data("user-quiz");
      App.router.navigate("/quiz_overview/" + userQuizId, { trigger: true });      
    },

    startQuiz: function(event) {
      var userQuizId = $(event.currentTarget).data("user-quiz");
      App.router.navigate("/quiz/" + userQuizId, { trigger: true });
    }
  });
})(App);