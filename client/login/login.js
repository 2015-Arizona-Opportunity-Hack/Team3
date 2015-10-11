if (Meteor.isClient) {
    // This code only runs on the client
    Template.body.helpers({
        graphs: function () {
            var x = Meteor.users.find({}, {sort: {createdAt: -1}});
        }
    });
    Template.body.events({
        "submit .new-task": function (event) {
            // Prevent default browser form submit
            event.preventDefault();

            // Get value from form element
            var personName = event.target.personName.value;
            var personAge = event.target.personAge.value;
            var cancerType = event.target.cancerType.value;
            var gender = event.target.gender.value;

            // Insert a task into the collection

            if (Meteor.userId()) {
                var flag = false;
                Meteor.users.update({_id: Meteor.userId()},
                    {
                        $set: {
                            'profile.name': personName,
                            'profile.age': personAge,
                            'profile.cancerType': cancerType,
                            'profile.gender': gender
                        }
                    });
                $('#form-div').modal('hide');
            }
            $('#form-div').modal('hide');
        }
    });
    Template.body.events({
        "submit .new-form": function (event) {
            // Prevent default browser form submit
            event.preventDefault();
            var cancerType = event.target.cancerType.value;
            if (Meteor.userId()) {
                var x = Meteor.users.find({'profile.cancerType': cancerType}).fetch();
                var ans = "";
                if (typeof x[0]!== "undefined") {
                    for (var i = 0; i < x.length; i++) {
                        ans += x[i].username + "<br>";
                        console.log(x[i].username);
                    }
                } else{
                    ans="Sorry! No people found!"
                }
                document.getElementById("basket").innerHTML = ans;
            }
        }
    });
    Template.body.events({
        'click #settings': function (e) {
            e.preventDefault();
            $('#form-div').modal('show');
        }
    });
    Template.body.events({
        'click .glyphicon-remove': function (e) {
            e.preventDefault();
            $('#form-div').modal('hide');
        }
    });
    Template.body.events({
        'click #cancel_btn': function (e) {
            e.preventDefault();
            $('#form-div').modal('hide');
        }
    });
    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });
}
