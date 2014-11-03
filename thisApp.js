Clicks = new Mongo.Collection("myClicks");

if (Meteor.isClient) {
  Template.hello.helpers({
    counter: function () {
      return Clicks.find().count();
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Clicks.insert({'clickNo': function () {
        return Clicks.find().count() + 1;
      }});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
