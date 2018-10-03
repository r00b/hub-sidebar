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
    this.render('globalnav', {
      into: 'application',
      outlet: 'globalNav',
      controller: 'globalnav',
      model: { /*...*/ }
    });
  },

  actions: {
    willTransition () {
      // close the sidebar on transitions
      this.controllerFor('application').set('sidebarIsOpen'), false;
    },
    toggleSidebar () {
      this.controllerFor('application').toggleProperty('sidebarIsOpen');
    }
  }

});
