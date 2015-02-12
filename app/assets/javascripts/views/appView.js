'use strict';

var App = App || {};

(function(App) {
  App.AppView = Backbone.View.extend({
    render: function() {
      this.$el.html(
        HandlebarsTemplates['app/layout']()
      );

      return this;
    },

    displayUserQuizzes: function(View) {
      this.currentView = new View();
      this.$el.find(".app-content").html(this.currentView.render().el);
      
      this.$el.find(".user-quiz").each(function(){

      var progressAmount = (2 * $(this).find(".progress-amount").attr("data-progress"));

      $(this).find(".progress-bar").animate({
          width: progressAmount + "%"
        }, 2500);

      
      var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
      $(this).find(".progress-bar").animateNumber(
        {
          number: progressAmount,
          color: 'orange',
          'font-size': '30px',

          easing: 'easeInQuad',

          numberStep: percent_number_step
        },
        2500
      );

    });
    },

    displayUserQuizOverview: function(View, userQuizId) {
      this.currentView = new View();
      this.$el.find(".app-content").html(this.currentView.render(userQuizId).el);
    },

    displayQuestion: function(View) {
      this.currentView = new View();
      this.$el.find(".app-content").html(this.currentView.render().el);
      
      this.$el.find(".results-progress").each(function(){

        var progressAmount = (20 * $(this).find(".times-correct-amount").attr("data-times-correct"));

        $(this).find(".progress-bar").animate({
            width: progressAmount + "%"
          }, 2500);

        
        var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
        $(this).find(".progress-bar").animateNumber(
          {
            number: progressAmount,
            color: 'orange',
            'font-size': '20px',

            easing: 'easeInQuad',

            numberStep: percent_number_step
          },
          2500
        );

      });
    },

    displayAnswers: function(View, questionId, userQuizId) {
      this.currentView = new View();
      this.$el.find(".app-content").html(this.currentView.render(questionId, userQuizId).el);
    },

    displayAnswer: function(View, questionId, answerId) {
      this.currentView = new View();
      this.$el.find(".app-content").html(this.currentView.render(questionId, answerId).el);
    }

  });
})(App);