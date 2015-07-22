Tilblr.Collections.Posts = Backbone.Collection.extend({
  url: "/api/posts",
  model: Tilblr.Models.Post,

  initialize: function (models, options) {
    this.blog = options.blog;
    this.before = null;
  },

  comparator: function (thisPost, otherPost) {
    var thisDate = Date.parse(thisPost.get("created_at"));
    var otherDate = Date.parse(otherPost.get("created_at"));

    if (thisDate < otherDate) {
      return 1;
    } else if (thisDate > otherDate) {
      return -1;
    } else {
      return 0;
    }
  },

  fetch: function () {
    Backbone.Collection.prototype.fetch.call(this, {
      data: { blog_id: this.blog.id, before: this.before },
      success: function () {

      }.bind(this)
    });
  }
});
