import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { reads } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({

  router: service(),

  currentRoute: reads('router.currentRouteName'),

  shouldShowGlobalNavBar: computed('currentRoute', function () {
    return this.get('currentRoute') !== 'layout';
  }),

  sidebarIsOpen: false,

  actions: {
    toggleSidebar () {
      this.toggleProperty('sidebarIsOpen')
    }
  }

});
