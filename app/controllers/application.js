import Controller from '@ember/controller';

export default Controller.extend({

  /*
    TODO:
      - can it squish.... flexbox...
      - use components + services
        - global nav component
        - sidebar content component
      - layout route is different
      - flexibly render content into it - components, named outlets, ember-elsewhere...
  */

  sidebarIsOpen: false,

  actions: {
    toggleSidebar () {
      this.toggleProperty('sideBarIsOpen')
    }
  }

});
