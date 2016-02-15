var swiper;
var slideOptions;

Template.apps.onRendered(function () {
  swiper = new Swiper('.apps-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    hashnav: true
  });

  slideOptions = {
    wp: 3,
    fullStack: 1,
    mobile: 2
  };

  Session.set("start-zones", false);
  Session.set("start-zones-v1", false);
  Session.set("start-zones-v2", false);
  Session.set("westminster-webshot-ready", false);

  Meteor.call("westminsterWebshot", function (error, result) {
    if (error)
      return console.log("Could not get webshot of Westminster webpage");
    Session.set("westminster-webshot-ready", true);
  });
});

Template.apps.helpers({
  showDemoZones: function () {
    return Session.get("start-zones");
  },
  showDemoZonesV1: function () {
    return Session.get("start-zones-v1");
  },
  westminsterWebshotReady: function () {
    return Session.get("westminster-webshot-ready");
  }
});

Template.apps.events({
  "click .wp-link": function (e) {
    e.preventDefault();

    swiper.slideTo(slideOptions.wp);
  },
  "click .full-stack-link": function (e) {
    e.preventDefault();

    swiper.slideTo(slideOptions.fullStack);
  },
  "click .mobile-link": function (e) {
    e.preventDefault();

    swiper.slideTo(slideOptions.mobile);
  },
  "click .start-app-zones-v1": function (e) {
    e.preventDefault();
    Session.set("start-zones", true);
    Session.set("start-zones-v1", true);
    Session.set("start-zones-v2", false);
  },
  "click .start-app-zones-v2": function (e) {
    e.preventDefault();
    Session.set("start-zones", true);
    Session.set("start-zones-v1", false);
    Session.set("start-zones-v2", true);
  }
})
