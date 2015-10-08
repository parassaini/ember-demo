import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate: function() {
      var data = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:devise', data).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    },
    authenticateWithFacebook: function() {
      this.get('session').authenticate('authenticator:torii', 'facebook');
    }
  }
});