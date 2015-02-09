var App = App || {};

(function(App) {
  App.Quizzes = Backbone.Collection.extend({
    url: "/api/quizzes",
    model: App.Quiz,
    updateAllProgress: function(){
      this.each(function(quiz) {
        var totalForQuiz = App.questionsCollection.quizQuestions(quiz.get('id')).reduce(function(sum, question) {
          return sum + question.get('times_correct');
        }, 0);
        App.quizzesCollection.get(quiz.get('id')).save({ progress: totalForQuiz });
        console.log(quiz.get('title') + "'s total score: " + totalForQuiz)
      });
      
    }
  });

  App.quizzesCollection = new App.Quizzes();
})(App);