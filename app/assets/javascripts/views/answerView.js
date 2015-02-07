'use strict';

var App = App || {};

(function(App) {
  App.AnswerView = Backbone.View.extend({
    events: {
      'click .show-question': 'showQuestion'
    },

    initialize: function() {
      App.answersCollection.on("add", this.render, this);
    },

    render: function(questionId, answerId) {
      var answer = App.answersCollection.get(answerId).toJSON();

      if (questionId === answerId) {

        this.$el.html(
          HandlebarsTemplates['answers/correct']({ answer: answer })
        );
      } else {
        this.$el.html(
          HandlebarsTemplates['answers/incorrect']({ answer: answer })
        );
      }
      return this;
    },

    showQuestion: function() {
      App.questionsCollection.fetch().then(function() {
        App.rootView.displayQuestion(App.QuestionView);
      })
    }
  });
})(App);