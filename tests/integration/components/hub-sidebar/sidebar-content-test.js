import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hub-sidebar/sidebar-content', 'Integration | Component | hub sidebar/sidebar content', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hub-sidebar/sidebar-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hub-sidebar/sidebar-content}}
      template block text
    {{/hub-sidebar/sidebar-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
