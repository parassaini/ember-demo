import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';
export default Ember.Route.extend(RouteMixin, {
  perPage: 8,
  model: function(params) {
    // params.paramMapping = {total_pages: "num_pages"};
    return this.findPaged('product', params);
  }
})