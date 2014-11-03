Clicks = new Mongo.Collection("myClicks");

if (Meteor.isClient) {
  Template.hello.helpers({
    counter: function () {
      return Clicks.find().count();
    }
  });

  Template.hello.events({
    'click #inc': function () {
      // increment the counter when button is clicked
      Clicks.insert({'clickNo': function () {
        return Clicks.find().count() + 1;
      }});
    },
    'click #clear': function () {
      Meteor.call("clearCount");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.methods({
      "clearCount": function() {
        Clicks.remove({});
      }
    })
  });
}
