import Ember from 'ember';

export default Ember.Component.extend({
  _initialize: function(){
    this.$('.bxslider').bxSlider();
  }.on('didInsertElement')
});