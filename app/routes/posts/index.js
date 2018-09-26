import Route from '@ember/routing/route';

export default Route.extend({

  model () {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json());
    // return resp.json();
  }

});
