import { equal } from '@ember/object/computed';
import Component from '@ember/component';

/*
  options:
    - animation: slide or squish
    - showUnderlay: boolean
    - open: boolean
*/

export default Component.extend({

  classNames: ['hub-sidebar'],

  classNameBindings: ['open', 'showUnderlay', 'shouldSquish'],

  showUnderlay: true,

  animation: 'slide', // slide | squish

  shouldSquish: equal('animation', 'squish'),

  actions: {
    open () {
      this.set('open', true);
    },
    close () {
      this.set('open', false);
    },
    toggle () {
      this.toggleProperty('open');
    }
  }

});
