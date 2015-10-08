import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service('cart'),

  actions: {
    addToCart: function() {
      this.get('cart').addToCart(this.variant, this.get('quantity'));
    }
  }
});