'use strict';

var App = App || {};

(function(App) {
  App.UserQuizzesView = Backbone.View.extend({

    events: {
      'click .start-quiz': 'startQuiz'
    },

    render: function() {

      var totalsForQuizzes = App.userQuizzesCollection.updateAllProgress();

      this.$el.html(
        HandlebarsTemplates['user_quizzes/index']({ quizzes: App.userQuizzesCollection.toJSON() })
      );

      return this;
    },

    startQuiz: function(event) {
      var quizId = $(event.currentTarget).data("quiz");
      App.router.navigate("/quiz/" + quizId, { trigger: true });
    }
  });
})(App);