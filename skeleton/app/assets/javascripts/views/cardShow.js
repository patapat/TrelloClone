TrelloClone.Views.CardShow = Backbone.CompositeView.extend({
  template: JST['cards/card_show'],

  className: "cards",

  attributes: function() {
    return {
      'data-card-id': this.model.id
    };
  },

  render: function () {
    var content = this.template({ card: this.model });
    this.$el.html(content);

    return this;
  },
});
