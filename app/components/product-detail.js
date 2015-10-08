import Ember from 'ember';

export default Ember.Component.extend({
  _initialize: function(){
    var slider = this.$('.bxslider').bxSlider();
    this.set('slider', slider);
  }.on('didInsertElement')
});