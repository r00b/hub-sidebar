import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    willTransition () {
      this.controllerFor('index').set('sidebarIsOpen', false);
    }
  }

});
