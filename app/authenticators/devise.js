
import Devise from 'ember-simple-auth/authenticators/devise';

export default Devise.extend({
  serverTokenEndpoint: 'http://localhost:3001/api/ams/users/token'
});