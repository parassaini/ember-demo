import DS from 'ember-data';

export default DS.Model.extend({
  // Attributes
  quantity:            DS.attr('number'),
  singleDisplayAmount: DS.attr('string'),

  price:               DS.attr('number'),
  total:               DS.attr('number'),
  displayAmount:       DS.attr('string'),

  order:   DS.belongsTo('order'),
  variant: DS.belongsTo('variant')
});