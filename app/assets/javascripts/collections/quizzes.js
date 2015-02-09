var App = App || {};

(function(App) {
  App.Quizzes = Backbone.Collection.extend({
    url: "/api/quizzes",
    model: App.Quiz
  });

  App.quizzesCollection = new App.Quizzes();
})(App);