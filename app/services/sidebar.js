import Service from '@ember/service';

export default Service.extend({

  isOpen: false,

  toggleSidebar () {
    this.toggleProperty('isOpen');
  }

});
