Tilblr.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST["blogs/posts_index"],

  initialize: function () {
    this.listenTo(this.collection, "add remove", this.render);
  },

  render: function () {
    this.$el.html(this.template());

    this.addNewPost();
    this.addPosts();
    
    return this;
  },

  addPosts: function () {
    this.collection.each(function (post) {
      var postView = new Tilblr.Views.PostShow({ model: post });
      this.addSubview("#posts", postView);
    }.bind(this));
  },

  addNewPost: function () {
    var newPostView = new Tilblr.Views.NewPost({el: "#new-post"});
    this.addSubview("#new-post", newPostView);
  }
})

