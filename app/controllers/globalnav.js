import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({

  sidebarService: service('sidebar'),

  actions: {
    toggleSidebar() {
      this.get('sidebarService').toggleSidebar();
    }
  }
});
