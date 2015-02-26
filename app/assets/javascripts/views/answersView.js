'use strict';

var App = App || {};

(function(App) {
  App.AnswersView = Backbone.View.extend({
    events: {
      'click .answer': 'showAnswer'
    },

    render: function(questionId, userQuizId) {
      var question = App.questionsCollection.get(questionId);
      var userQuizAnswers = App.answersCollection.userQuizAnswers(userQuizId);
      var sequenceNumber = Number($(".app-content").attr("data-sequence"));

      this.$el.html(
        HandlebarsTemplates['answers/index']({ answers: userQuizAnswers.toJSON(), question: question.toJSON() })
      );

      sequenceNumber += 1;
        
      $(".app-content").attr("data-sequence", sequenceNumber);

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