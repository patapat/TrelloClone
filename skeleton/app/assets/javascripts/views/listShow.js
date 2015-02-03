TrelloClone.Views.ListShow = Backbone.CompositeView.extend({

  template: JST['lists/list_show'],

  events: {
    'click .cards': "deleteCard"
  },

  initialize: function () {
    this.collection = this.model.cards();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'sync add remove', this.render);
  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    this.renderCards();
    this.renderForm();

    return this;
  },

  addCard: function (card) {
    var view = new TrelloClone.Views.CardShow({ model: card, collection: this.collection })
    this.addSubview('#list-cards', view);
  },

  renderCards: function () {
    this.model.cards().each(this.addCard.bind(this));
  },

  renderForm: function () {
    var view = new TrelloClone.Views.CardForm({ collection: this.model.cards() });
    this.addSubview('#card-form', view);
  },

  deleteCard: function (event) {

  }
});
