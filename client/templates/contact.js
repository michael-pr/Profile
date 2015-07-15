Template.contact.onRendered(function () {
  clearFormErrors();
});

Template.contact.events({
  "submit form": function (e) {
    e.preventDefault();

    var email = {
      name: $(e.target).find("#contact-full-name").val(),
      from: $(e.target).find("#contact-email").val(),
      message: $(e.target).find("#contact-message").val()
    }

    var errors = validateContactForm(email);
    clearFormErrors();
    if (_.keys(errors).length > 0)
      return handleFormErrors(errors);

    Meteor.call("sendEmail", email.from, email.message, email.name, function (error, result) {
      if (error)
        alert("Sorry, I could not submit this message. Please try again later.");
      else
        Router.go("thankyou");
    });

  }
});

var validateContactForm = function (emailAttr) {
  var errors = {};

  if (!emailAttr.name)
    errors.name = "Please enter your full name";
  if (!emailAttr.from)
    errors.from = "Please enter your email";
  if (!emailAttr.message)
    errors.message = "Please enter a message";

  return errors;
};

var handleFormErrors = function (errors) {
  if (_.has(errors, "name"))
    $("#contact-full-name").parent().parent(".form-group").addClass("has-error");
  if (_.has(errors, "from"))
    $("#contact-email").parent().parent(".form-group").addClass("has-error");
  if (_.has(errors, "message"))
    $("#contact-message").parent().parent(".form-group").addClass("has-error");
};

var clearFormErrors = function () {
  $("#contact-full-name").parent().parent(".form-group").removeClass("has-error");
  $("#contact-email").parent().parent(".form-group").removeClass("has-error");
  $("#contact-message").parent().parent(".form-group").removeClass("has-error");
};
