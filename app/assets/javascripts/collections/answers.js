var App = App || {};

(function(App) {
  App.Answers = Backbone.Collection.extend({
    url: "/api/answers",
    model: App.Answer
  });

  App.answersCollection = new App.Answers();
})(App);

