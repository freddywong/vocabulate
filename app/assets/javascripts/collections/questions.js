var App = App || {};

(function(App) {
  App.Questions = Backbone.Collection.extend({
    url: "/api/questions",
    model: App.Question,
    quizQuestions: function(userQuizId) {
      var userQuizId = Number(userQuizId);
      var quizQuestions = this.filter(function(question) {
        return question.get('user_quiz_id') === userQuizId;
      });

      return new App.Questions(quizQuestions);
    },    

    questionSequence: function(quizQuestions) {
      var questionSequence = quizQuestions.sortBy(function(question) {
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

      return actualQuestionPool;
    },

    question: function(questionPool, sequenceNumber) {

      var question = questionPool[sequenceNumber]
      
      return question;
    }

  });

  App.questionsCollection = new App.Questions();
})(App);
