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

    displayContent: function(View) {
      var sequenceNumber = this.$el.find(".app-content").data("sequence")
      this.currentView = new View();
      this.$el.find(".app-content").html(this.currentView.render(sequenceNumber).el);
    }
  });
})(App);