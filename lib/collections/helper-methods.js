if (Meteor.isServer) {

  Meteor.methods({

    sendEmail: function (from, text, name) {

      check([from, text, name], [String]);

      this.unblock();

      Email.send({
        to: "mtnp55@live.com",
        from: from,
        subject: "Contact from profile website - From '" + name + "'",
        text: text
      });

    },
    westminsterWebshot: function () {
      console.log("Starting web shot");
      webshot("google.com", "public/westminster-home.png", function (error) {
        if (error)
          return Meteor.Error("invalid-webshot", "Could not retrieve webshot. Reason: " + error);
        return {
          success: true
        };
      })
    }

  });

}
