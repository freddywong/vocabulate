'use strict';

var App = App || {};

(function(App) {
  App.QuestionView = Backbone.View.extend({

    events: {
      'click .list-answers': 'listAnswers'
    },
    initialize: function() {
      App.questionsCollection.on("add", this.render, this);
    },

    render: function() {

      var sequenceNumber = Number($(".app-content").attr("data-sequence"));
      console.log(App.questionPool.length)
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
      App.answersCollection.fetch().then(function() {
        App.rootView.displayAnswers(App.AnswersView, questionId);  
      })
    }
  });
})(App);
