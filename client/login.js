
if (Meteor.isClient) {
    // This code only runs on the client
    Template.body.helpers({
        tasks: function () {
            return Tasks.find({}, {sort: {createdAt: -1}});
        }
    });
    Template.body.events({
        "submit .new-task": function (event) {
            // Prevent default browser form submit
            event.preventDefault();

            // Get value from form element
            var personName = event.target.personName.value;
            var personAge = event.target.personAge.value;

            // Insert a task into the collection
            if (Meteor.userId()) {
                 Meteor.users.update({_id: Meteor.userId()},
                     { $set: { 'profile.name': personName, 'profile.age': personAge }});
            }
        }
    });
    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });
}