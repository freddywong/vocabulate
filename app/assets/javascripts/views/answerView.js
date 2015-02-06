'use strict';

var App = App || {};

(function(App) {
  App.AnswerView = Backbone.View.extend({

    initialize: function() {
      App.answersCollection.on("add", this.render, this);
    },

    render: function() {
      this.$el.html(
        HandlebarsTemplates['answers/show']({ answers: App.answersCollection.toJSON() })
      );

      return this;
    }
  });
})(App);