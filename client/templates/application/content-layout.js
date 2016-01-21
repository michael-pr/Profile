Template.contentLayout.onRendered(function () {
  this.find(".side-content")._uihooks = {
    insertElement: function (node, next) {
      $(node).hide().insertBefore(next).fadeIn(200);
    },
    removeElement: function (node) {
      $(node).fadeOut(200, function() {
        $(this).remove();
      });
    }
  }
});

Template.contentLayout.helpers({
  isActive: function (/* route names */) {
    var args = Array.prototype.slice.call(arguments, 0);
    args.pop();

    var active = _.any(args, function (name) {
      return Router.current() && Router.current().route.getName() === name;
    });

    return active && "active";
  },
  quotesReady: function () {
    return (Quotes.find().count() > 0);
  }
});

Template.contentLayout.events({

  "click .side-menu-wrapper": function (e) {
    var targetElement = $(e.target);

    if (targetElement.hasClass("side-menu-links")) { // || targetElement.hasClass("link")) {
      e.preventDefault();
      //HomeOverlay.showHome();
      Router.go("/");
    }
  },
  "click .side-menu-mobile": function (e) {
    Router.go("/");
    HomeOverlay.showHome();
  }

});
