var App = App || {};

(function(App) {
  App.Questions = Backbone.Collection.extend({
    url: "/api/questions",
    model: App.Question,
    questionSequence: function(sequenceNumber) {
      var questionSequence = App.questionsCollection.sortBy(function(question) {
        return question.get("times_correct");
      });

      var questionPool = questionSequence.slice(0, 5);

      var question = questionPool[sequenceNumber]
      
      return question;
    }
  });

  App.questionsCollection = new App.Questions();
})(App);
