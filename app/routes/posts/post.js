import Route from '@ember/routing/route';

export default Route.extend({

  model ({post_id}) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`).then(resp => resp.json());
  },

});
