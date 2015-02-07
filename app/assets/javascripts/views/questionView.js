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

    render: function(sequenceNumber) {
      var questionsSequence = App.questionsCollection.sortBy(function(question) {
        return question.get("times_correct");
      });

      var questionPool = questionsSequence.slice(0, 5);

      var question = questionPool[sequenceNumber]
      
      if ( sequenceNumber < 6 ) {
        sequenceNumber = $(".app-content").data("sequence") + 1;
      } else {
        sequenceNumber
      }

      this.$el.html(
        HandlebarsTemplates['questions/show']({ question: question })
      );
      return this;
    },

    listAnswers: function(){
      App.answersCollection.fetch().then(function() {
        App.rootView.displayContent(App.AnswerView);
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