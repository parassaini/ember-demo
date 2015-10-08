import DS from 'ember-data';

export default DS.Model.extend({
  alt: DS.attr('string'),
  smallUrl: DS.attr('string'),
  largeUrl: DS.attr('string')
});