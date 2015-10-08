import Ember from 'ember';
// import ControllerMixin from 'ember-cli-pagination/remote/controller-mixin';

export default Ember.Controller.extend({
  // queryParams: ['page', 'perPage'],
  // binding the property on the paged array
  // to the query params on the controller
  // abc: function () {
  //   return 'a'
  // },
  // pageBinding: "content.page",
  // perPageBinding: "content.perPage",
  // totalPagesBinding: "content.totalPages",
  // totalPagesBinding: "pagedContent.totalPages",
  queryParams: ["page", "perPage"],

  // pageBinding: "content.page",

  totalPagesBinding: "content.totalPages",

  pagedContentBinding: "content",
  perPage: 8,
  page: 1
});