import Route from '@ember/routing/route';

export default Route.extend({

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
