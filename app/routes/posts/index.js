import Route from '@ember/routing/route';

export default Route.extend({

  model () {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json());
  },

  renderTemplate(controller, model) {
    this.render('sidebar', {
      into: 'application',
      outlet: 'sidebar-content'
    });
    this._super(...arguments);
  }

});
