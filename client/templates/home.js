Meteor.startup(function () {
  window.addEventListener("onhashchange", function (e) {
    console.log("Back button pressed");
  });
});

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
    if (Quotes.find().count() > 0 && quoteIndexes.length > 0) {
      return Quotes.find().fetch()[quoteIndexes[whichQuote.get()]].content; //{ quote: "test", author: "test" };//
    }
    else
      return { quote: "Loading...", author: "Web Server" };
  },
  year: function () {
     return new Date().getFullYear();
  }
});

Template.home.events({
  "click .home-wrapper": function (e) {
    var target = $(e.target);
    if (target.hasClass("home-background")) {
        e.preventDefault();

        if (target.hasClass("active")) {
          target.removeClass("active");
          $(".quote-wrapper").animate({ "opacity": "1" }, 800);
        } else {
          target.addClass("active");
          $(".quote-wrapper").animate({ "opacity": "0" }, 800);
        }
    }
  },
  "click .quote-wrapper": function (e) {
    e.preventDefault();

    changeQuote();
    Session.set("changedQuote", true);
  },

  "click .link": function (e) {
    e.preventDefault();

    HomeOverlay.hideHome($(e.target).context.href);
  }
});

var changeQuote = function () {
  var currentIndex = whichQuote.get();
  if (currentIndex === (numberOfQuotes - 1))
    whichQuote.set(0);
  else
    whichQuote.set(currentIndex + 1)
}

HomeOverlay = {

  showHomeImmediately: function () {
    //console.log("Showing Home Immediately");

    var homeWrapper = $(".home-wrapper");
    homeWrapper.css({
      "z-index": "50",
      "left": "0",
      "top": "0"
    });
    $(".quote-wrapper").add(".link-wrapper").add(".home-footer").css("opacity", "1");
    $(".content-layout-wrapper").hide();
    Session.set("homeVisible", true);
  },

  hideHomeImmediately: function () {
    //console.log("Hiding Home Immediately");

    var homeWrapper = $(".home-wrapper");
    homeWrapper.css({
      "z-index": "-10",
      "left": "-25%",
      "top": "0"
    });
    $(".quote-wrapper").add(".link-wrapper").add(".home-footer").css("opacity", "0");
    $(".content-layout-wrapper").show().css("opacity", "1");
    Session.set("homeVisible", false);
  },

  showHome: function () {
    //console.log("Showing Home");

    var homeWrapper = $(".home-wrapper");
    homeWrapper.animate({
      "left": "0"
    }, {
      duration: 200,
      easing: "easeInOutExpo",
      complete:  function () {
        Session.set("homeVisible", true);
      }
    });


    $(".content-layout-wrapper").fadeOut(200, function () {
      homeWrapper.css("z-index", "50");
      Session.set("contentVisible", false);
    });

    $(".quote-wrapper").add(".link-wrapper").add(".home-footer").animate({
      "opacity": "1"
    }, 300);
  },

  hideHome: function (pathToRender) {
    //console.log("Hiding Home");

    Router.go(pathToRender);

    var homeWrapper = $(".home-wrapper");
    homeWrapper.css("z-index", "-10");
    $(".content-layout-wrapper").css("opacity", "1");

    $(".content-layout-wrapper").fadeIn(200, function() {
      Session.set("contentVisible", true);
    });

    homeWrapper.animate({
      "left": "-25%"
    }, {
      duration: 200,
      easing: "easeInOutExpo",
      complete: function () {
        Session.set("homeVisible", false);
      }
    });

    $(".quote-wrapper").add(".link-wrapper").add(".home-footer").animate({
      "opacity": "0"
    }, 100);

    var homeBackground = $(".home-background");
    if (homeBackground.hasClass("active"))
      homeBackground.removeClass("active");

  }

}
