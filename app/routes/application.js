import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import $ from "jquery";
import {computed} from '@ember/object';
import {getOwner} from '@ember/application';

export default Route.extend({

  // router: service(),
  //
  // className: computed('router.currentRouteName', function () {
  //   const routeName = this.get('router.currentRouteName') || '';
  //   return routeName.replace(/\./g, "-");
  // }),

  // actions: {
  //   didTransition() {
  //     // let root = getOwner(this).get('rootElement');
  //     // $(root).addClass('sidebar-post');
  //     let className = this.get('className');
  //     debugger;
  //     if (className) document.body.classList.add(className);
  //   },
  //
  //   willTransition() {
  //     // let root = getOwner(this).get('rootElement');
  //     // root.classList.remove(this.get('className'));
  //     let className = this.get('className');
  //     debugger;
  //     if (className) document.body.classList.remove(className);
  //
  //   }
  // }

});
