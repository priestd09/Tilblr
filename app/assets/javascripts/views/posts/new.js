Tilblr.Views.NewPost = Backbone.View.extend({
  events: {
    "click button.create-post": "formView",
    "click button.cancel-post": "buttonView",
  },

  initialize: function (options) {
    this.buttonView();
  },

  buttonView: function () {
    event.preventDefault();
    this.$el.removeClass("active");
    var postButton = new Tilblr.Views.PostButton();
    this._swapView(postButton);
  },

  formView: function () {
    this.$el.addClass("active");
    var newPost = new Tilblr.Models.Post();
    var postForm = new Tilblr.Views.PostForm({
      model: newPost,
      collection: this.collection
    });

    this._swapView(postForm)
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$el.html(this._currentView.render().$el);
  }
});
