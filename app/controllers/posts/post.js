import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    updateSidebar () {
      this.toggleProperty('sidebarIsOpen');
      return true;
    }
  }
});
