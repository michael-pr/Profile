Template.contentLayout.onRendered(function () {
  this.find(".side-content")._uihooks = {
    insertElement: function (node, next) {
      $(node).hide().insertBefore(next).fadeIn();
    },
    removeElement: function (node) {
      $(node).fadeOut(function() {
        $(this).remove();
      });
    }
  }
});

Template.contentLayout.helpers({
  isActive: function () {
    return "";
  }
});

Template.contentLayout.events({

  "click .side-menu-wrapper": function (e) {
    var targetElement = $(e.target);

    if (targetElement.hasClass("side-menu-links")) { // || targetElement.hasClass("link")) {
      e.preventDefault();
      Router.go("home");
    }
  }

});
