import Route from '@ember/routing/route';

export default Route.extend({

  renderTemplate () {
    this._super(...arguments);
    this.render('sidebar', {
      into: 'application',
      outlet: 'sidebarContent',
      controller: 'sidebar',
      model: { /*...*/ }
    });
    this.render('layout/topnav', {
      into: 'application',
      outlet: 'topNav',
      // controller: 'globalnav',
      // model: { /*...*/ }
    });
  },

});
