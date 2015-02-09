'use strict';

var App = App || {};

(function(App) {
  App.Quiz = Backbone.Model.extend({
    urlRoot: "/api/quizzes"
  });
})(App);