Router.configure({
  layoutTemplate: "contentLayout",
  loadingTemplate: "loading",
  waitOn: function () {
    return Meteor.subscribe("quotes");
  }
});


/*Router.route("/", function () {
  //this.subscribe("quotes").wait();

  this.render("emptyPage");


});*/

/*
Router.route("/about", function () {
  if (Session.get("homeVisible"))
    HomeOverlay.hideHome();

  this.render("about");
});
Router.route("/resume", function () {
  if (Session.get("homeVisible"))
    HomeOverlay.hideHome();

  this.render("resume");
});
Router.route("/blog", function () {
  if (Session.get("homeVisible"))
    HomeOverlay.hideHome();

  this.render("blog");
});
Router.route("/contact", function () {
  if (Session.get("homeVisible"))
    HomeOverlay.hideHome();

  this.render("contact");
});
Router.route("/thankyou", { name: "thankyou" });
*/


Router.route("/", {
  name: "emptyPage"
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
Router.route("/apps", {
  name: "apps"
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

var handleHome = function () {
  //console.log(this.route._path);
  var path = this.route._path;
  if (path !== "/") {
    var homeVisible = Session.get("homeVisible");
    if (homeVisible === undefined)
      HomeOverlay.hideHomeImmediately();
    else if (homeVisible)
      HomeOverlay.hideHome(path);
  } else {
    var homeVisible = Session.get("homeVisible");
    if (homeVisible === undefined)
      HomeOverlay.showHomeImmediately();
    else if (!homeVisible)
      HomeOverlay.showHome();
  }

  this.next();
}

Router.onBeforeAction(handleHome, { only: ["emptyPage", "about", "resmue", "blog", "contact", "apps"] });
//Router.onBeforeAction(showLoading, { only: "resume" });
