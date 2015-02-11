'use strict';

var App = App || {};

(function(App) {
  App.UserQuiz = Backbone.Model.extend({
    urlRoot: "/api/user_quizzes"
  });
})(App);