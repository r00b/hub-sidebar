import { inject as service } from '@ember/service';
// import { computed } from '@ember/object';
// import { reads } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({


  sidebarService: service('sidebar'),

  // actions: {
  //   toggleSidebar () {
  //     this.toggleProperty('sidebarIsOpen')
  //   }
  // }

});
