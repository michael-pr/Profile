var resumeLoaded = new ReactiveVar();

Template.resume.onRendered(function () {
  resumeLoaded.set(false);

  $("#resume-frame").load(function () {
    resumeLoaded.set(true);
  });
});

Template.resume.helpers({
  showLoading: function () {
    return !resumeLoaded.get();
  }
});
