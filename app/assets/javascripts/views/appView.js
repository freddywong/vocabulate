'use strict';

var App = App || {};

(function(App) {
  App.AppView = Backbone.View.extend({
    render: function() {
      this.$el.html(
        HandlebarsTemplates['app/layout']()
      );

      return this;
    },

    displayQuestion: function(View) {
      this.currentView = new View();
      this.$el.find(".app-content").html(this.currentView.render().el);
    },

    displayAnswers: function(View, questionId) {
      this.currentView = new View();
      this.$el.find(".app-content").html(this.currentView.render(questionId).el);
    },

    displayAnswer: function(View, questionId, answerId) {
      this.currentView = new View();
      this.$el.find(".app-content").html(this.currentView.render(questionId, answerId).el);
    }

  });
})(App);