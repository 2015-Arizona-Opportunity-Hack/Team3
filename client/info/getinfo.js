/**
 * Created by Nitesh on 10/11/15.
 */
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