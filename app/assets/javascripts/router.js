'use strict';

var App = App || {};

(function(App) {
  App.Router = Backbone.Router.extend({
    routes: {
      'question': 'question',
      'answer': 'answer'
    },

    initialize: function() {
      App.rootView = new App.AppView();
      $("#app-container").html(App.rootView.render().el);
    },

    question: function() {  
      App.questionsCollection.fetch().then(function() {
        var questionSequence = App.questionsCollection.questionSequence();  
        App.questionPool = App.questionsCollection.questionPool(questionSequence);
        App.rootView.displayQuestion(App.QuestionView);
      });
    },

    answer: function() {
      App.answersCollection.fetch().then(function() {
        App.rootView.displayContent(App.AnswerView);
      })
    }
  });  
  App.router = new App.Router();
})(App);