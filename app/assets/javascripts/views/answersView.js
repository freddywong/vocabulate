'use strict';

var App = App || {};

(function(App) {
  App.AnswersView = Backbone.View.extend({
    render: function() {
      this.$el.html(
        HandlebarsTemplates['answers/index']({ answers: App.answersCollection.toJSON() })
      );
      return this;
    }
  });
})(App);