import $ from 'jquery';
import ActiveModelAdapter from 'active-model-adapter';
import Ember from 'ember';

export default ActiveModelAdapter.extend({
  namespace: 'api/ams',
  host: 'http://localhost:3001',
  headers: Ember.computed(function() {
    var orderToken = localStorage.getItem('currentOrderToken'),
        orderId = localStorage.getItem('currentOrderNumber');
    if (orderId != null && orderToken != null) {
      return {
        "X-Spree-Order-Token": orderToken,
        "X-Spree-Order-Id": orderId
      }
    } else {
      return {}
    }
  })
});
