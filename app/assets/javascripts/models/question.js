'use strict';

var App = App || {};

(function(App) {
  App.Question = Backbone.Model.extend({
    urlRoot: "/api/questions"
  });
})(App);