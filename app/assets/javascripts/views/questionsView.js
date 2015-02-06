'use strict';

var App = App || {};

(function(App) {
  App.QuestionsView = Backbone.View.extend({

    initialize: function() {
      App.questionsCollection.on("add", this.render, this);
    },

    render: function() {
      this.$el.html(
        HandlebarsTemplates['questions/index']({ questions: App.questionsCollection.toJSON() })
      );

      return this;
    }
  });
})(App);
