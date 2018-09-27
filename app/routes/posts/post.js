import Route from '@ember/routing/route';
import {getOwner} from '@ember/application';
import $ from 'jquery';

export default Route.extend({

  model({post_id}) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`).then(resp => resp.json());
  },

  renderTemplate(controller, model) {
    this.render('posts/sidebar', {
      into: 'application',
      outlet: 'sidebar-content'
    });
    this._super(...arguments);
  },

  activate() {
    this._super(...arguments);
    let root = getOwner(this).get('rootElement');
    $(root).addClass('sidebar-post');
  },

  deactivate() {
    this._super(...arguments);
    let root = getOwner(this).get('rootElement');
    $(root).removeClass('sidebar-post');
  },

});
