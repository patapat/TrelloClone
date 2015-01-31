TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/list_show'],

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);

    return this;
  }
});
