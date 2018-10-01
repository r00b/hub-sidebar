import Controller from '@ember/controller';

export default Controller.extend({

  sidebarIsOpen: false,

  actions: {
    toggleSidebar() {
      this.toggleProperty('sidebarIsOpen');
    }
  }

});
