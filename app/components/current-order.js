import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service('cart'),
  actions: {
    deleteLineItem: function(lineItem) {
      this.get('cart').removeLineItem(lineItem);
    }
  }
});