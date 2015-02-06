'use strict';

var App = App || {};

(function(App) {
  App.QuestionView = Backbone.View.extend({

    initialize: function() {
      App.questionsCollection.on("add", this.render, this);
    },

    render: function() {

      var questionsSequence = App.questionsCollection.sortBy(function(question) {
        return question.get("times_correct");
      });

      var questionPool = questionsSequence.slice(0, 5);

      $.each(questionPool, function(index, question){
        
      })

      this.$el.html(
        HandlebarsTemplates['questions/show']({ questions: questionPool })
      );
      return this;
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