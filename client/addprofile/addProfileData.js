/**
 * Created by Tharun on 10/11/2015.
 */

Template.addProfileDataForm.events({
    "submit form": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var personName = event.target.personName.value;
        var personAge = event.target.personAge.value;
        var cancerType = event.target.cancerType.value;
        var gender = event.target.gender.value;
        if (Meteor.userId()) {
            Meteor.users.update({_id: Meteor.userId()},
                {
                    $set: {
                        'profile.name': personName,
                        'profile.age': personAge,
                        'profile.cancerType': cancerType,
                        'profile.gender': gender
                    }
                });
        }
        // Insert a task into the collection
        /*
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

        }
        */
        //$('#form-div').modal('hide');
    }
});
