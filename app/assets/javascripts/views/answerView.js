'use strict';

var App = App || {};

(function(App) {
  App.AnswerView = Backbone.View.extend({

    initialize: function() {
      App.answersCollection.on("add", this.render, this);
    },

    render: function(sequenceNumber, answerId) {
      var answer = App.answersCollection.get(answerId).toJSON();
      this.$el.html(
        HandlebarsTemplates['answers/show']({ answer: answer })
      );

      return this;
    }
  });
})(App);