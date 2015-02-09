'use strict';

var App = App || {};

(function(App) {
  App.AnswersView = Backbone.View.extend({
    events: {
      'click .answer': 'showAnswer'
    },

    render: function(questionId, quizId) {
      var question = App.questionsCollection.get(questionId);
      var quizAnswers = App.answersCollection.quizAnswers(quizId);

      this.$el.html(
        HandlebarsTemplates['answers/index']({ answers: quizAnswers.toJSON(), question: question.toJSON() })
      );

      this.$el.find(".answer").attr("data-question", questionId );

      return this;
    },

    showAnswer: function(event) {
      var answerId = $(event.currentTarget).data("answer");
      var questionId = $(event.currentTarget).data("question");
      App.rootView.displayAnswer(App.AnswerView, questionId, answerId);
    } 
  });
})(App);