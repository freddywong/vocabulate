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
      
      var question = App.questionsCollection.get(questionId);

      if (questionId === answerId) {
      var answer = App.answersCollection.get(answerId).toJSON();  

        var timesCorrect = question.get("times_correct");
        
        if (timesCorrect < 5) {
          timesCorrect += 1;  
        } 
        
        App.questionsCollection.get(questionId).save({ times_correct: timesCorrect })
        this.$el.html(
          HandlebarsTemplates['answers/correct']({ answer: answer, question: question.toJSON() })
        );
      } else {

        var answer = App.answersCollection.findWhere({ question_id: questionId})

        this.$el.html(
          HandlebarsTemplates['answers/incorrect']({ answer: answer.toJSON() , question: question.toJSON() })
        );
      }
      return this;
    },

    showQuestion: function() {
      App.rootView.displayQuestion(App.QuestionView);
    }
  });
})(App);