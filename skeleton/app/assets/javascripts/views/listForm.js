TrelloClone.Views.ListForm = Backbone.CompositeView.extend({
  template: JST['lists/list_form'],

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
})
