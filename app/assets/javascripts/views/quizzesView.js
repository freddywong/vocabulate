'use strict';

var App = App || {};

(function(App) {
  App.QuizzesView = Backbone.View.extend({

    events: {
      'click .start-quiz': 'startQuiz'
    },

    render: function() {

      this.$el.html(
        HandlebarsTemplates['quizzes/index']({ quizzes: App.quizzesCollection.toJSON() })
      );
      
      return this;
    },

    startQuiz: function(event) {
      var quizId = $(event.currentTarget).data("quiz");
      App.router.navigate("/quiz/" + quizId, { trigger: true });
    }
  });
})(App);