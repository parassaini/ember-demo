import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),

  init: function() {
    var order = null,
      _this = this;
    this.set('orderNumber', localStorage.getItem('currentOrderNumber'))
      if (_this.get('orderNumber')) {
        _this.refreshCart();
      } else {
        _this.createCart();
      }
  },

  createCart: function() {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve) {
      _this.get('store').createRecord('order').save().then(function(order) {
        _this.set('order', order);
        _this.persistOrder();
        return order;
      }).finally(function() {
        resolve();
      })
    });
  },

  refreshCart: function() {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve) {
      _this.get('store').find('order', _this.get('orderNumber')).then(
        function(currentOrder) {
          _this.set('order', currentOrder);
          _this.persistOrder();
        }).finally(function() {
        resolve();
      });
    });
  },

  persistOrder: function() {
    localStorage.setItem('currentOrderNumber', this.get('order.number'));
    localStorage.setItem('currentOrderToken', this.get('order.guestToken'));
  },

  addToCart: function(variant, quantity) {
    var _this        = this,
      currentOrder = this.get('order'),
      quantity = quantity || 1;
    if (currentOrder) {
      _this.addLineItem(variant, quantity, currentOrder);
    } else {
      this.createCart.then(
        function(currentOrder) {
          _this.addLineItem(variant, quantity, currentOrder);
        }
      );
    }
  },

  removeLineItem: function(lineItem) {
    var _this = this;
    lineItem.deleteRecord();
    lineItem.save().then(
      function(lineItem) {
        _this.refreshCart();
      }
    );
  },

  addLineItem: function(variant, quantity, order) {
    var _this = this;
    var lineItem = order.get('lineItems').findBy('variant', variant);

    if (lineItem) {
      var currentQuantity = lineItem.get('quantity');
      lineItem.set('quantity', currentQuantity + quantity);
    } else {
      lineItem = this.get('store').createRecord('lineItem', {
        variant:  variant,
        quantity: quantity,
        order: order
      });
    }
    lineItem.save().then(
      function(lineItem) {
        return lineItem;
      }
    );
  },

});
