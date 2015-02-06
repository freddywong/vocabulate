var App = App || {};

(function(App) {
  App.Questions = Backbone.Collection.extend({
    url: "/api/questions",
    model: App.Question
  });

  App.questionsCollection = new App.Questions();
})(App);