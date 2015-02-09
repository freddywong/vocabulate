'use strict';

var App = App || {};

(function(App) {
  App.Router = Backbone.Router.extend({
    routes: {
      'quizzes':'quizzes',
      'quiz/:id': 'quiz',
      'answer': 'answer'
    },

    initialize: function() {
      App.rootView = new App.AppView();
      $("#app-container").html(App.rootView.render().el);
    },

    quizzes: function() {
      App.quizzesCollection.fetch().then(function() {
        App.rootView.displayQuizzes(App.QuizzesView);
      })
    },

    quiz: function(id) {  
      App.questionsCollection.fetch().then(function() {
        $(".app-content").attr("data-sequence", 0);
        var quizQuestions = App.questionsCollection.quizQuestions(id);
        var questionSequence = App.questionsCollection.questionSequence(quizQuestions);  
        App.questionPool = App.questionsCollection.questionPool(questionSequence);
        App.rootView.displayQuestion(App.QuestionView);
      });
    },

    answer: function() {
      App.answersCollection.fetch().then(function() {
        App.rootView.displayContent(App.AnswerView);
      })
    }
  });  
  App.router = new App.Router();
})(App);