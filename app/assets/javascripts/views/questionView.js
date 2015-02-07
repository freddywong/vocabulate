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
      var sequenceNumber = Number($(".app-content").attr("data-sequence"))
      console.log(sequenceNumber)

      var question = App.questionsCollection.questionSequence(sequenceNumber);

      this.$el.html(
        HandlebarsTemplates['questions/show']({ question: question })
      );

      if ( sequenceNumber < 6 ) {
        sequenceNumber += 1;

        $(".app-content").attr("data-sequence", sequenceNumber);
      } else {
        sequenceNumber
      }
      return this;
    },

    listAnswers: function(event){
      var questionId = $(event.currentTarget).data("question");
      App.answersCollection.fetch().then(function() {
        App.questionsCollection.fetch().then(function() {
          App.rootView.displayAnswers(App.AnswersView, questionId);  
        })
      })
    }
  });
})(App);


    // render: function(){

    //   var flightsWithPlanes = [];
    //   App.flightsCollection.each(function(flight) {
    //     flight.attributes.formattedDate = flight.attributes.date.substr(0, 10);
    //     var withPlane = flight.toJSON();
    //     withPlane.planeName = App.planesCollection.get(flight.get('plane_id')).get('name');
    //     flightsWithPlanes.push(withPlane)
    //   });

    //   this.$el.html(
    //     HandlebarsTemplates['flights/index']({ flights: flightsWithPlanes })
    //     );


      // return this;
    // }