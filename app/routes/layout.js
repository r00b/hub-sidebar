import Route from '@ember/routing/route';

export default Route.extend({

  afterModel () {
    // setup for this route
    this.controllerFor('application').set('shouldShowGlobalNavBar', false);
    this.controllerFor('application').set('animation', 'squeeze');

  },

  actions: {
    showSidebar () {
      this.controllerFor('application').toggleProperty('sideBarIsOpen');
    }
  }

});
