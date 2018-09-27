import Controller from '@ember/controller';

export default Controller.extend({

  sidebarTitle: 'This is standard post sidebar content!',

  actions: {
    updateSidebar() {
      // this is not the best representation of a major template change
      this.set('sidebarTitle', 'This is changed post sidebar content!');
    }
  }

});
