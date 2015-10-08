import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  additionalTaxTotal:    DS.attr('number'),
  adjustmentTotal:       DS.attr('number'),
  checkoutSteps:         DS.attr('string'),
  currency:              DS.attr('string'),
  email:                 DS.attr('string'),
  guestToken:            DS.attr('string'),
  includedTaxTotal:      DS.attr('number'),
  itemCount:             DS.attr('number'),
  itemTotal:             DS.attr('number'),
  number:                DS.attr('string'),
  paymentState:          DS.attr('string'),
  paymentTotal:          DS.attr('number'),
  shipmentState:         DS.attr('string'),
  shipmentTotal:         DS.attr('number'),
  state:                 DS.attr('string'),
  total:                 DS.attr('number'),

  lineItems:               DS.hasMany('lineItem'),

  empty: Ember.computed('itemCount', function() {
    return this.get('itemCount') === 0;
  }),

  hasEmail: Ember.computed('email', function() {
    return this.get('email.length') > 0;
  }),

  isConfirm: Ember.computed('state', function() {
    return this.get('state') === "confirm";
  }),

  isComplete: Ember.computed('state', function() {
    return this.get('state') === "complete";
  })
});