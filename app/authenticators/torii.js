import Ember from 'ember';
import Torii from 'ember-simple-auth/authenticators/torii';
import raw from 'ic-ajax';

const { RSVP } = Ember;
const { service } = Ember.inject;

export default Torii.extend({
  torii: service('torii'),

  authenticate() {
    return new RSVP.Promise((resolve, reject) => {
      this._super(...arguments)
      .then(function(data) {
        raw({
          headers: {
            'Access-Control-Allow-Origin': ['Origin', 'Content-Type', 'Accept', 'Authorization', 'Token', 'X-Spree-Token', 'X-Spree-Order-Token', 'X-Spree-Order-Id']
          },
          url:      'http://localhost:3001/users/auth/facebook/callback',
          type:     'POST',
          dataType: 'json',
          data:     { 'code': data.authorizationCode }
        }).then(function(response) {
          resolve({
            // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
            access_token: 'response.access_token',
            // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
            provider: 'data.provider'
          });
        }, reject);
      }, reject);
    });
  }
});

// import Ember from 'ember';
// import Torii from 'ember-simple-auth/authenticators/torii';
// import { request } from 'ic-ajax';

// export default Torii.extend({
//   torii: Ember.inject.service('torii'),
//   providers: {
//     'facebook': function(authResponse) {
//       return request('http://localhost:3001/users/auth/facebook/callback', {
//         data: { code: authResponse.authorizationCode },
//         type: 'POST'
//       }).then(function(response) {
//         return { accessToken: response.access_token };
//       });
//     }
//   },

//   authenticate: function(provider, options) {
//     return this.get('torii').open(provider, options).then((authResponse) => {
//       return this.get('providers')[provider](authResponse);
//     });
//   },

//   restore: function(data) {
//     return Ember.RSVP.resolve(data);
//   }
// });