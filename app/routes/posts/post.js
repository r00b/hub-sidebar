import Route from '@ember/routing/route';

export default Route.extend({

  model ({post_id}) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`).then(resp => resp.json());
  },

  renderTemplate () {
    this._super(...arguments);
    this.render('posts/sidebar', {
      into: 'posts.post',
      outlet: 'sidebarContent'
    })
  },

  actions: {
    updateSidebar() {
      this.render('posts/sidebar2', {
        into: 'posts.post',
        outlet: 'sidebarContent'
      });
      return true;
    }
  }

});
