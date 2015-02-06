'use strict';

var App = App || {};

(function(App) {
  App.Router = Backbone.Router.extend({
    routes: {
      'questions': 'questions'
    },

    initialize: function() {
      App.rootView = new App.AppView();
      $("#app-container").html(App.rootView.render().el);
    },

    questions: function() {
      App.questionsCollection.fetch().then(function() {
        App.rootView.display(App.QuestionsView);
      });
    }
  });  
  App.router = new App.Router();
})(App);