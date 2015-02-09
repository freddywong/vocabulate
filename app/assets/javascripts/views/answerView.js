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
        var timesCorrect = App.questionsCollection.get(questionId).get("times_correct");
        
        if (timesCorrect < 5) {
          timesCorrect += 1;  
        } 
        
        App.questionsCollection.get(questionId).save({ times_correct: timesCorrect })
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
      App.rootView.displayQuestion(App.QuestionView);
    }
  });
})(App);