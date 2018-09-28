import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    willTransition () {
      // set default sidebar state
      this.controllerFor('application').set('sideBarIsOpen', false);
      this.controllerFor('application').set('sidebarToggleVisible', true);
      this.controllerFor('application').set('shouldShowGlobalNavBar', true);
      this.controllerFor('application').set('animation', 'slide');
    },
    toggleSidebar () {
      this.controllerFor('application').toggleProperty('sideBarIsOpen');
    }
  }
});
