import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    toggleSidebar() {
      this.toggleProperty('sidebarIsOpen');
    }
  }

});
