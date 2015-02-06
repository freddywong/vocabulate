'use strict';

var App = App || {};

(function(App) {
  App.Answer = Backbone.Model.extend({
    urlRoot: "/api/answer"
  });
})(App);