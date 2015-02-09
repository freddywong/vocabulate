'use strict';

var App = App || {};

(function(App) {
  App.QuestionView = Backbone.View.extend({

    events: {
      'click .list-answers': 'listAnswers',
      'click .list-quizzes': 'listQuizzes'
    },
    initialize: function() {
      App.questionsCollection.on("add", this.render, this);
    },

    render: function() {

      var sequenceNumber = Number($(".app-content").attr("data-sequence"));
      var question = App.questionsCollection.question(App.questionPool, sequenceNumber);
      if ( sequenceNumber < App.questionPool.length ) {
        this.$el.html(
          HandlebarsTemplates['questions/show']({ question: question })
        );

        sequenceNumber += 1;
        
        $(".app-content").attr("data-sequence", sequenceNumber);

      } else {

        this.$el.html(
          HandlebarsTemplates['questions/results']({ questions: App.questionPool })
        );  
      }

      return this;

    },

    listAnswers: function(event){
      var questionId = $(event.currentTarget).data("question");
      var quizId = $(event.currentTarget).data("quiz");
      App.answersCollection.fetch().then(function() {
        App.rootView.displayAnswers(App.AnswersView, questionId, quizId);  
      })
    }, 

    listQuizzes: function() {
      App.router.navigate("/quizzes", { trigger: true });
    }
  });
})(App);
