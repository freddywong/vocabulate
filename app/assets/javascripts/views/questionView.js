'use strict';

var App = App || {};

(function(App) {
  App.QuestionView = Backbone.View.extend({

    events: {
      'click .review-word': 'reviewWord',
      'click .show-question-after-review': 'showQuestionAfterReview',
      'click .list-answers': 'listAnswers',
      'click .list-quizzes': 'listQuizzes',
      'click .back-quiz': 'backToQuiz'
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

      } else {

        this.$el.html(
          HandlebarsTemplates['questions/results']({ questions: App.quizQuestions.toJSON(), answers: App.quizAnswers.toJSON() })
        ); 
        
      }

      return this;

    },

    reviewWord: function(){
      var sequenceNumber = Number($(".app-content").attr("data-sequence"));
      var question = App.questionsCollection.question(App.questionPool, sequenceNumber);
      var questionId = question.attributes.id
      var answer = App.answersCollection.get(questionId)
      this.$el.html(
        HandlebarsTemplates['questions/review']({question: question, answer: answer})
      );

      sequenceNumber += 1;

      $(".app-content").attr("data-sequence", sequenceNumber);
    },

    showQuestionAfterReview: function() {
      App.rootView.displayQuestion(App.QuestionView);
    },

    listAnswers: function(event){
      var questionId = $(event.currentTarget).data("question");
      var userQuizId = $(event.currentTarget).data("user-quiz");
      App.answersCollection.fetch().then(function() {
        App.rootView.displayAnswers(App.AnswersView, questionId, userQuizId);  
      })
    }, 

    listQuizzes: function() {
      App.router.navigate("/my_quizzes", { trigger: true });
    }, 

    backToQuiz: function() {
      App.router.navigate("/my_quizzes", { trigger: true });
    }
  });
})(App);
