Tilblr.Views.BlogSidebar = Backbone.View.extend({
  template: JST["blogs/blog_sidebar"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    debugger;
    this.$el.html(this.template({blog: this.model}));

    return this;
  }
})
