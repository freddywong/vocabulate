'use strict';

var App = App || {};

(function(App) {
  App.Router = Backbone.Router.extend({
    routes: {
      'questions': 'questions',
      'answers': 'answers'
    },

    initialize: function() {
      App.rootView = new App.AppView();
      $("#app-container").html(App.rootView.render().el);
    },

    questions: function() {
      App.questionsCollection.fetch().then(function() {
        App.rootView.display(App.QuestionsView);
      });
    },

    answers: function() {
      App.answersCollection.fetch().then(function() {
        App.rootView.display(App.AnswersView);
      })
    }
  });  
  App.router = new App.Router();
})(App);