import Service from '@ember/service';

export default Service.extend({

  isOpen: false,

  toggleSidebar () {
    this.toggleProperty('isOpen');
  },

  openSidebar () {
    this.set('isOpen', true);
  },

  closeSidebar () {
    this.set('isOpen', false);
  }

});
