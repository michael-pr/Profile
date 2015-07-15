Router.configure({
  layoutTemplate: "contentLayout",
  loadingTemplate: "loading"
});

Router.route("/", {
  name: "home",
  layoutTemplate: "layout",
  waitOn: function () {
    return Meteor.subscribe("quotes");
  }
});

Router.route("/about", {
  name: "about"
});
Router.route("/resume", {
  name: "resume"
});
Router.route("/blog", {
  name: "blog"
});
Router.route("/contact", {
  name: "contact"
});
Router.route("/thankyou", { name: "thankyou" });

var showLoading = function () {
    if (Session.get("showLoading")) {
      this.render(this.loadingTemplate);
    } else {
      this.next();
    }
};

//Router.onBeforeAction(showLoading, { only: "resume" });
