var whichQuote = new ReactiveVar();

var numberOfQuotes;
var quoteIndexes;
var quoteChangerIntervalId;

Template.home.onCreated(function () {

  numberOfQuotes = Quotes.find().count();

  quoteIndexes = [];
  for (var i = 0; i < numberOfQuotes; i++)
    quoteIndexes.push(i);
  quoteIndexes.sort(function () {
    return Math.random() - 0.5;
  });

  whichQuote.set(0);

  Meteor.clearInterval(quoteChangerIntervalId);
})

Template.home.onRendered(function () {

  quoteChangerIntervalId = Meteor.setInterval(function () {
    if (Session.get("changedQuote"))
      Session.set("changedQuote", false);
    else
      changeQuote();
  }, 18 * 1000);

})

Template.home.helpers({
  quote: function () {
    return Quotes.find().fetch()[quoteIndexes[whichQuote.get()]].content;
  },
  year: function () {
     return new Date().getFullYear();
  }
});

Template.home.events({
  "click .home-wrapper": function (e) {
    var target = $(e.target);
    if (target.hasClass("home-container")) {
        e.preventDefault();

        var background = $(".home-background");

        if (background.hasClass("active"))
          background.removeClass("active");
        else
          background.addClass("active");
    }
  },
  "click .quote-wrapper": function (e) {
    e.preventDefault();

    changeQuote();
    Session.set("changedQuote", true);
  }
});

var changeQuote = function () {
  var currentIndex = whichQuote.get();
  if (currentIndex === (numberOfQuotes - 1))
    whichQuote.set(0);
  else
    whichQuote.set(currentIndex + 1)
}
