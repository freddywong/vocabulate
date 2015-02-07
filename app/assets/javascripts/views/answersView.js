'use strict';

var App = App || {};

(function(App) {
  App.AnswersView = Backbone.View.extend({
    events: {
      'click .answer': 'showAnswer'
    },

    render: function() {
      this.$el.html(
        HandlebarsTemplates['answers/index']({ answers: App.answersCollection.toJSON() })
      );
      return this;
    },

    showAnswer: function(event) {
      var answerId = $(event.currentTarget).data("answer");
      App.answersCollection.fetch().then(function() {
        App.rootView.displayContent(App.AnswerView, answerId);
      })
    }
  });
})(App);