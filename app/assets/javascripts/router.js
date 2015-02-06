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
        App.rootView.display(App.QuestionView);
      });
    },

    answer: function() {
      App.answersCollection.fetch().then(function() {
        App.rootView.display(App.AnswerView);
      })
    }
  });  
  App.router = new App.Router();
})(App);