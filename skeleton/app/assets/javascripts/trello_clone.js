window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    TrelloClone.boards = new TrelloClone.Collections.Boards();
    TrelloClone.boards.fetch({
      success: function () {
      }
    });

    TrelloClone.lists = new TrelloClone.Collections.Lists({ });
    TrelloClone.lists.fetch();

    new TrelloClone.Routers.Boards({ $rootEl: $('body') });
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   TrelloClone.initialize();
// });
