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

    }

  });

}
