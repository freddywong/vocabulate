var App = App || {};

(function(App) {
  App.Questions = Backbone.Collection.extend({
    url: "/api/questions",
    model: App.Question,

    questionSequence: function() {

      var questionSequence = App.questionsCollection.sortBy(function(question) {
        return question.get("times_correct");
      });      
      return questionSequence;
    },

    questionPool: function(questionSequence) {

      var initialQuestionPool = questionSequence.slice(0, 5);

      var actualQuestionPool = [];
      initialQuestionPool.forEach(function (question) {
        if (question.attributes.times_correct < 5) {
          actualQuestionPool.push(question);
        }
      });

      console.log(actualQuestionPool)

      return actualQuestionPool;
    },

    question: function(questionPool, sequenceNumber) {

      var question = questionPool[sequenceNumber]
      
      return question;
    }
  });

  App.questionsCollection = new App.Questions();
})(App);
