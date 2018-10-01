import Route from '@ember/routing/route';

export default Route.extend({

  renderTemplate () {
    this._super(...arguments);
      this.render('sidebar', {
        into: 'application',
        outlet: 'sidebarContent'
      })
  },

  actions: {
    willTransition () {
      // close the sidebar on transitions
      this.controllerFor('application').set('sideBarIsOpen'), false;
    },
    toggleSidebar () {
      this.controllerFor('application').toggleProperty('sideBarIsOpen');
    }
  }

});
