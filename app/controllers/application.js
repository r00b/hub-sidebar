import Controller from '@ember/controller';

export default Controller.extend({

  /*
    TODO:
      - layout route is different
      - flexibly render content into it - components, named outlets, ember-elsewhere...
  */

  sidebarIsOpen: false,

  actions: {
    toggleSidebar () {
      this.toggleProperty('sidebarIsOpen')
    }
  }

});
