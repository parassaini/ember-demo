import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

  name:         DS.attr('string'),
  description:  DS.attr('string'),
  price:        DS.attr('number'),
  displayPrice: DS.attr('string'),

  images:                  DS.hasMany('image'),
  variantsIncludingMaster: DS.hasMany('variant'),

  variants: Ember.computed('variantsIncludingMaster', function() {
    return this.get('variantsIncludingMaster').rejectBy('isMaster');// elements with property
  }),

  masterVariant: Ember.computed('variantsIncludingMaster', function() {
    return this.get('variantsIncludingMaster').findBy('isMaster');// first element with property true
  })
});