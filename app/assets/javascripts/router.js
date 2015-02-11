'use strict';

var App = App || {};

(function(App) {
  App.Router = Backbone.Router.extend({
    routes: {
      'my_quizzes':'userQuizzes',
      'quiz_overview/:id': 'userQuizOverview', 
      'quiz/:id': 'quiz'
    },

    setContainer: function() {
      App.rootView = new App.AppView();
      $("#app-container").html(App.rootView.render().el);
    },

    userQuizzes: function() {
      this.setContainer();
      App.questionsCollection.fetch().then(function() {
        App.userQuizzesCollection.fetch().then(function() {
          App.rootView.displayUserQuizzes(App.UserQuizzesView);
        }); 
      });
    },

    userQuizOverview: function(userQuizId) {
      this.setContainer();
      App.questionsCollection.fetch().then(function() {
        App.answersCollection.fetch().then(function() {
          App.rootView.displayUserQuizOverview(App.UserQuizOverview, userQuizId);
        })
      })
    },

    quiz: function(userQuizId) {  
      this.setContainer();
      App.questionsCollection.fetch().then(function() {
        $(".app-content").attr("data-sequence", 0);
        var quizQuestions = App.questionsCollection.quizQuestions(userQuizId);
        var questionSequence = App.questionsCollection.questionSequence(quizQuestions);  
        App.questionPool = App.questionsCollection.questionPool(questionSequence);
        App.rootView.displayQuestion(App.QuestionView);
      });
    }
  });  
  App.router = new App.Router();
})(App);